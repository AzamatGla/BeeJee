import React from 'react';
import PostItem from '../post-list-item/'
import './post-list.css';

// const PostList = ({data, onDone}) => {
//     console.log(data.tasks)

//     return (
//         <div>No data</div>
//     )
// }

const PostList = ({data, onDone}) => {
    let elements = null;
    if (!data.tasks) {
        elements = <span className='h3'>No tasks yet...</span>
    }
    else if (data.tasks.length > 0) {
        elements = data.tasks.map(item => {

            return (<>
                <PostItem 
                    className="list-group-item" 
                    {...item} 
                    onDone={()=> onDone(item.id)}
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

export default PostList;