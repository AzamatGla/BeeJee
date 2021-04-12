import React from 'react';

const ModalForm = ({postData, onValueChange, username, email, text, errors}) => {
    const submitButton = () => {
        console.log(errors.title);
        console.log(errors.email);
        if (errors.title == false && errors.email == false) {
            console.log('yes')
            return (<button type="submit" class="btn btn-primary" data-dismiss="modal" onClick={postData}>Send message</button>)
        
        }
        console.log('here')
        console.log(errors)
        return (<button type="button" class="btn btn-primary">Send message</button>)
        
    };
    return (
        <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New task</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                <div class="form-group">
                    <label htmlFor="recipient-name" class="col-form-label">username:
                        {errors.title && <span className='error-red'>&nbsp;{errors.title}</span>}
                    </label>
                    <input type="text" name='username' value={username} className="form-control" id="recipient-name" onChange={onValueChange}/>
                </div>
                <div class="form-group">
                    <label htmlFor="message-text" class="col-form-label">email:
                        {errors.email && <span className='error-red'>&nbsp;{errors.email}</span>}
                    </label>
                    <input type="text" name='email' value={email} className="form-control" id="message-text" onChange={onValueChange}/>
                </div>
                <div class="form-group">
                    <label htmlFor="message-text" class="col-form-label">text:</label>
                    <input type="text" name='text' className='form-control' value={text} onChange={onValueChange}/>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                {submitButton()}
            </div>
            </div>
        </div>
        </div>
    )
}

export default ModalForm;