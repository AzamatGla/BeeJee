import React from 'react';
import './post-add-form.css';


const PostAddForm = ({onInput, postData}) => {
    return (
        <div className="d-flex bottom-panel justify-content-center">
            <button className='btn btn-info' data-toggle="modal" data-target="#exampleModal">Добавить</button>
        </div>
    )
}

export default PostAddForm;