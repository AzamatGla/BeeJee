 import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, id, username, email, status, onDone, done} = this.props;
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
        return (
            <li className={className} key={id}>
                <span className="app-list-item-label">{username}</span>
                <span className="app-list-item-label">{email}</span>
                <span className="app-list-item-label">{text}</span>
                <span className="app-list-item-label">{statusMessage}</span>
                 <div className="d-flex justify-content-center align-items-center">
                     <input className='checkbox form-check-input' type='checkbox' onClick={onDone}/>
                 </div>
             </li>
        )
    }
}




















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
