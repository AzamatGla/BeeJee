import React from 'react';

const ModalForm = ({postData, onValueChange}) => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">username:</label>
                    <input type="text" name='username' class="form-control" id="recipient-name" onChange={onValueChange}/>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">email:</label>
                    <input type="text" name='email' class="form-control" id="message-text" onChange={onValueChange}/>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">text:</label>
                    <textarea class="form-control" name='text' id="message-text" onChange={onValueChange}></textarea>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" data-dismiss="modal" onClick={postData}>Send message</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ModalForm;