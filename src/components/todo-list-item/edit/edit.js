import React from 'react';

const Edit = ({onValueChange, onDone, id}) => {
    const dataTarget = `#loginModal-${id}`;
    const modalId = `loginModal-${id}`;
    return (
        <>
        <span className="loginButton m-1" id={id}>
            <a data-toggle="modal" data-target={dataTarget} className="btn btn-secondary">Редактировать</a>
        </span>

<div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">
    <div className="modal-header border-bottom-0">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <div className="form-title text-center">
        <h4>Редактирование</h4>
      </div>
      <div className="d-flex">
        <form onChange={e => onValueChange(e)}>
          <div className="form-group">
            <input type="text" className="form-control" name="text" placeholder="Введите текст..." onChange={(e) => onValueChange(e)}/>
          </div>
          <p>Выберите статус задачи:</p>
            <input type="radio" id="not-done" name="status" value="0"/>
            <label htmlFor="not-done">Задача не выполнена</label><br/>
            <input type="radio" id="not-done-edited" name="status" value="1"/>
            <label htmlFor="not-done-edited">Задача не выполнена и отредактирована</label><br/>
            <input type="radio" id="done" className={id} name="status" value="10"/>
            <label htmlFor="done">Задача выполнена</label><br/>
            <input type="radio" id="done-edited" name="status" value="11"/>
            <label htmlFor="done-edited">Задача выполнена и отредактирована</label><br/>
          <button type="button" className="btn btn-info btn-block btn-round w-50" data-dismiss="modal" onClick={e => onDone(e, id)}>Редактировать</button>
        
        </form>
        
      </div>
  </div>
  </div>   
  </div>
  </div>
  </>
    )
}

export default Edit;