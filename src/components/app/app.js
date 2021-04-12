import React, {Component} from 'react';
import AppHeader from '../app-header/';
import TodoList from '../todo-list';
import AddForm from '../add-form';
import ModalForm from '../modal-form/modal-form';
import Pagination from '../pagination/pagination';
import {fetchTodoList, createTask, login, edit} from '../../api/api';
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {message:{tasks: ['empty']}},
            username: '',
            email: '',
            text: '',
            status: '',
            currentPage: 1,
            firstPage: 1,
            secondPage: 2,
            thirdPage: 3,
            errors: {
                title: 'заполните данные',
                email: 'заполните данные'
            },
            adminUsername: '',
            adminPassword: '',
            tokenIsSet: false,
            tokenError: false
        };
        this.onDone = this.onDone.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.postData = this.postData.bind(this);
        this.changePage = this.changePage.bind(this);
        this.emptyInputFields = this.emptyInputFields.bind(this);
        this.nextPreviousPage = this.nextPreviousPage.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.loginAdminAuthentication = this.loginAdminAuthentication.bind(this);
        this.logout = this.logout.bind(this);
        this.checkAuth = this.checkAuth.bind(this);
    }
    componentDidMount() {
        this.checkAuth();
        fetchTodoList(this.state.currentPage)
        .then(response => response.json())
        .then(data => {
            if (data) {
                this.setState({
                    data: data
                });
            }
        })
        if (window.localStorage.getItem('access token')) {
            this.setState(({tokenIsSet}) => ({tokenIsSet: true}))
        }
    }

    checkAuth() {
        let decodedToken = window.localStorage.getItem('access token');
        if (decodedToken) {
            if (decodedToken.exp < new Date().getTime()/1000) {
                this.setState(({tokenIsSet}) => ({
                tokenIsSet: false
                }));
            }
        }
        
        
        
    }

    async onDone(e, id) {
        const {data} = this.state,
              index = data.message.tasks.findIndex((item) => item.id === id),
              before = data.message.tasks.slice(0, index),
              after = data.message.tasks.slice(index+1);
        const newItem = data.message.tasks[index];
            
            if (e.target.value === 'on' || e.target.value === 'off') {
                if (this.state.tokenIsSet) {
                    if (newItem.status === 0) {
                        newItem.status = 10;
                    }
                    else {
                        newItem.status = 0;
                    }   
                }
                else {
                    e.preventDefault();
                    alert('Только админ может изменять состояние задачи');
                }
                
            }
            else {
                
                if (this.state.status == 0) {
                    newItem.status = 0;
                }
                else if (this.state.status == 1) {
                    newItem.status = 1;
                }
                else if (this.state.status == 10) {
                    newItem.status = 10;
                }
                else {
                    newItem.status = 11;
                }
            }
            newItem.text = this.state.text;
            
                       
              
        const newArr = [...before, newItem, ...after]
        const newObj = {
            status: 'ok',
            message: {
                tasks: newArr
            }
        }
        await this.setState(({data}) => ({
           data : newObj}
        ));
        console.log(this.state.data)
        return edit(id, newItem.text, newItem.status)
            .then(res => res.json)
            .then(res => res)
            .catch(err => console.log(err));
    }

    async emptyInputFields() {
        this.setState(({username, email, text}) => ({
            username: '',
            email: '',
            text: ''
        }));
    }

    postData(e) {
        
            const {username, email, text, currentPage} = this.state;
            if  (this.handleValidation(e.target)) {
                createTask(username, email, text)
                .then(response => {
                    fetchTodoList(currentPage)
                    .then(response => response.json())
                    .then(data => {
                        if (data) {
                            this.setState({
                                data: data
                            });
                        }
                    });
                })
                .then(res => {
                    this.emptyInputFields();
                })
                .catch(err => console.log(`We got a mistake: ${err}`))
            }
       
        
    }

    async onValueChange(e) {
        let newItem = {};
        if (e.target.name === 'username') {
            newItem.username = e.target.value;
            await this.setState(({username}) => ({
                username: newItem.username
            })
            )
        }
        else if (e.target.name === 'email') {
            newItem.email = e.target.value;
            await this.setState(({email}) => ({
                email: newItem.email
            })
            )
        }
        else if (e.target.name === 'adminUsername') {
            newItem.adminUsername = e.target.value;
            await this.setState(({adminUsername}) => ({
                adminUsername: newItem.adminUsername
            }))
        }
        else if (e.target.name === 'adminPassword') {
            newItem.password = e.target.value;
            await this.setState(({adminPassword}) => ({
                adminPassword: newItem.password
            }))
        }
        else if (e.target.name === 'status') {
            newItem.status = e.target.value;
            await this.setState(({status}) => ({
                status: newItem.status
            }))
           
        }
        else {
            newItem.text = e.target.value;
            await this.setState(({text}) => ({
            text: newItem.text
            })
        )
        
        }
        return this.handleValidation(e.target);
        
    }

    async changePage(pageNumber) {
        const {currentPage} = this.state;
        await this.setState(({currentPage}) => ({
            currentPage: pageNumber
        }) 
        )
        this.componentDidMount(currentPage)
    }

    nextPreviousPage(value) {
        let newFirstPage = 1, 
            newSecondPage = 2, 
            newThirdPage = 3;
        const {firstPage, secondPage, thirdPage} = this.state;
        if (value === 1) {
            newFirstPage = firstPage + 1;
            newSecondPage = secondPage + 1;
            newThirdPage = thirdPage + 1;
        }
        else if (firstPage !== 1) {
            newFirstPage = firstPage - 1;
            newSecondPage = secondPage - 1;
            newThirdPage = thirdPage - 1;
        }
        
        
        this.setState(({firstPage, secondPage, thirdPage}) => ({
            firstPage: newFirstPage,
            secondPage: newSecondPage,
            thirdPage: newThirdPage
        }))
    }

    handleValidation(data){
        let title = '';
        let email = '';
        let formIsValid = true;
        if(data.name === 'username'){
            
            if (data.value === '') {
            formIsValid = false;
            title = "Name cannot be empty";
            }
            else if(typeof data.value !== "undefined"){
            if(!data.value.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               title = "Only letters";
            }        
         }

         this.setState(({errors}) => {
             errors['title'] = title
         })
        }
        if (data.name === 'email') {
            if(data.value === '') {
                formIsValid = false;
                email = "Email cannot be empty";
             }
       
            else if (typeof data.value !== "undefined"){
                var re = /\S+@\S+\.\S+/;
     
                if (!re.test(data.value)) {
                   formIsValid = false;
                   email = "Email is not valid";
                 }
             }
        
            this.setState(({errors}) => {
                errors['email'] = email
            })
        }
       if (formIsValid) {
           this.setState(({errors}) => ({
               errors: {
                   title: '',
                   email: ''
               }
           }))
       }
       return formIsValid;
   }

   loginAdminAuthentication(e) {
        e.preventDefault()
        login(this.state.adminUsername, this.state.adminPassword)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    window.localStorage.setItem('access token', res.message.token)
                    this.setState(({tokenIsSet, tokenTime}) => ({
                        tokenIsSet: true,
                        tokenTime: new Date()
                    }))
                }
                else {
                    this.setState(({tokenError}) => ({
                        tokenError: 'Неверный логин или пароль'
                    }))
                }
            })
            .catch(err => console.log(err))
   }

   logout() {
       window.localStorage.clear();
       this.setState(({tokenIsSet}) => ({
           tokenIsSet: false
       }));
   }

    
    render() {
        const {data, firstPage, secondPage, thirdPage, username, email, text, errors, tokenIsSet, tokenError} = this.state;
        return (
            <div className='app'>
                <AppHeader login={this.loginAdminAuthentication} onValueChange={this.onValueChange} tokenIsSet={tokenIsSet} tokenError={tokenError} logout={this.logout}/>
                <TodoList data={data.message} onDone={this.onDone} tokenIsSet={this.state.tokenIsSet} onValueChange={this.onValueChange}/>
                <Pagination changePage={this.changePage} firstPage={firstPage} secondPage={secondPage} thirdPage={thirdPage} nextPreviousPage={this.nextPreviousPage}/>
                <AddForm onInput={this.onInput} postData={this.postData}/>
                <ModalForm postData={this.postData} onValueChange={this.onValueChange} username={username} email={email} text={text} errors={errors}/>
            </div>
            )
    }
} 
