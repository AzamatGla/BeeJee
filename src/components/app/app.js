import React, {Component} from 'react';
import AppHeader from '../app-header/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';
import ModalForm from '../modal-form/modal-form';
import Pagination from '../pagination/pagination';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import {fetchTodoList, createTask} from '../../api/api';
import './app.css'
import { Container } from 'reactstrap';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {message:{tasks: ['empty']}},
            username: '',
            email: '',
            text: '',
            currentPage: 1,
        };
        this.onDone = this.onDone.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.postData = this.postData.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount() {
        fetchTodoList(this.state.currentPage)
        .then(response => response.json())
        .then(data => {
            if (data) {
                this.setState({
                    data: data
                });
            }
        })
    }

    onDone(id) {
        const {data} = this.state,
              index = data.message.tasks.findIndex((item) => item.id === id),
              before = data.message.tasks.slice(0, index),
              after = data.message.tasks.slice(index+1);
        const newItem = data.message.tasks[index];
              if (newItem.status === 0) {
                newItem.status = 10;
              }
              else {
                  newItem.status = 0;
              }            
              
        const newArr = [...before, newItem, ...after]
        const newObj = {
            status: 'ok',
            message: {
                tasks: newArr
            }
        }
        return this.setState(({data}) => ({
           data : newObj}
        ));
    }

    postData(e) {
        e.preventDefault();
        const {username, email, text, currentPage} = this.state;
        createTask(username, email, text)
        .then(response => {
            console.log(response);
            fetchTodoList(currentPage)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    this.setState({
                        data: data
                    });
                }
            });
            console.log('did')
        })
        .catch(err => console.log(`We got a mistake: ${err}`))
    }

    onValueChange(e) {
        let newItem = {};
        if (e.target.name === 'username') {
            newItem.username = e.target.value;
            this.setState(({username}) => ({
                username: newItem.username
            })
            )
        }
        else if (e.target.name === 'email') {
            newItem.email = e.target.value;
            this.setState(({email}) => ({
                email: newItem.email
            })
            )
        }
        else {
        newItem.text = e.target.value;
        this.setState(({text}) => ({
            text: newItem.text
        })
        )
        }
        
    }

    changePage(pageNumber) {
        const {currentPage} = this.state;
        console.log(currentPage);
        console.log(pageNumber);
        this.setState(({currentPage}) => ({
            currentPage: pageNumber
        }), fetchTodoList(currentPage)
        )
    }
    
    render() {
        return (
            <div className='app'>
                <AppHeader/>
                <PostStatusFilter/>
                <PostList data={this.state.data.message} onDone={this.onDone}/>
                <Pagination changePage={this.changePage}/>
                <PostAddForm onInput={this.onInput} postData={this.postData}/>
                <ModalForm postData={this.postData} onValueChange={this.onValueChange}/>
            </div>
            )
    }
} 
