import React, { Component } from 'react';
import Edit from './edit/edit';
import './todo-list-item.css';

const TodoItem = ({text, id, username, email, status, onDone, done, tokenIsSet, onValueChange}) => {
    let className = 'app-list-item d-flex justify-content-between';
    let statusMessage = '';
    if (done) {
        className += ' line-through';
    }
    if (status === 0) {
        statusMessage = 'Задача не выполнена';
    }
    else if (status === 1) {
        statusMessage = 'Задача не выполнена и отредактирована админом';
    }
    else if (status === 10) {
        statusMessage = 'Задача выполнена';
    }
    else {
        statusMessage = 'Задача выполнена и отредактирована админом';
    }
    let inputButton;
    if (status === 10) {
        inputButton = <input className='checkbox form-check-input' id={id} type='checkbox' onChange={(event) => onDone(event, id)} checked/>;
    }
    else {
        inputButton = <input className='checkbox form-check-input' id={id} type='checkbox' onChange={(event) => onDone(event, id)}/>;
    }
    return (
        <li className={className} key={id}>
            <div className='username'>
                <span className="app-list-item-label">{username}</span>
            </div>
            <div className="email">
                <span className="app-list-item-label">{email}</span>
            </div>
            <div className="text d-flex justify-content-center">
                <span className="app-list-item-label">{text}</span>
            </div>
            <div className="status">
                <span className="app-list-item-label">{statusMessage}</span>
            </div>
             <div className="d-flex justify-content-center align-items-center">
                 {inputButton}
             </div>
             {tokenIsSet && <Edit onValueChange={onValueChange} onDone={onDone} id={id}/>}
         </li>
    )
};

export default TodoItem



















// export default class PostItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             className: 'app-list-item d-flex justify-content-between' 
//         }
//     }
//     render() {
//         return (
//             <li className={this.state.className} key={id} onClick={}>
// //                 <span className="app-list-item-label">{title}</span>
// //                 <div className="d-flex justify-content-center align-items-center">
// //                     <button className="btn-star btn-sm">
// //                         <i className='fa fa-star'></i>
// //                     </button>
// //                     <button className="btn-trash btn-sm">
// //                     <i className="fa fa-trash-o"></i>
// //                     </button>
// //                     <i className="fa fa-heart"></i>
// //                 </div>
// //             </li>
//         );
//     }
// }

// const PostItem = ({title, important, id}) => {
//     let className = "app-list-item d-flex justify-content-between";
    
    
    
//     return ( 
//             <li className={className} key={id} onClick={}>
//                 <span className="app-list-item-label">{title}</span>
//                 <div className="d-flex justify-content-center align-items-center">
//                     <button className="btn-star btn-sm">
//                         <i className='fa fa-star'></i>
//                     </button>
//                     <button className="btn-trash btn-sm">
//                     <i className="fa fa-trash-o"></i>
//                     </button>
//                     <i className="fa fa-heart"></i>
//                 </div>
//             </li>
//     )
// }
