import React from 'react';
import TodoItem from '../todo-list-item';
import './todo-list.css';


const TodoList = ({data, onDone, tokenIsSet, onValueChange}) => {
    let elements = null;
    if (!data.tasks) {
        elements = <span className='h3'>No tasks yet...</span>
    }
    else if (data.tasks.length > 0) {
        elements = data.tasks.map(item => {

            return (<>
                <TodoItem 
                    className="list-group-item" 
                    {...item} 
                    onDone={()=> onDone(item.id)}
                    tokenIsSet={tokenIsSet}
                    onValueChange={onValueChange}
                /> 
                </>
            )
        })
        
    }
    else {
         elements = <span className='h3'>No tasks yet...</span>
    }
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>  
    )
    
}

export default TodoList;