import React from 'react';

const Edit = (onValueChange) => {
    return (
        <>
        <span className="loginButton m-1">
            <a data-toggle="modal" data-target="#loginModal" className="btn btn-secondary">Редактировать</a>
        </span>

<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header border-bottom-0">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="form-title text-center">
        <h4>Редактирование</h4>
      </div>
      <div class="d-flex">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" name="text" placeholder="Введите текст..." onChange={onValueChange}/>
          </div>
          <p>Выберите статус задачи:</p>
            <input type="radio" id="not-done" name="status" value="0" onChange={onValueChange}/>
            <label htmlFor="not-done">Задача не выполнена</label><br/>
            <input type="radio" id="not-done-edited" name="status" value="1"/>
            <label htmlFor="not-done-edited">Задача не выполнена и отредактирована</label><br/>
            <input type="radio" id="done" name="status" value="10"/>
            <label htmlFor="done">Задача выполнена</label><br/>
            <input type="radio" id="done-edited" name="status" value="11"/>
            <label htmlFor="done-edited">Задача выполнена и отредактирована</label><br/>
          <button type="submit" class="btn btn-info btn-block btn-round w-50" data-dismiss="modal">Редактировать</button>
        
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