import React from 'react';

const Login = ({login, onValueChange, tokenError}) => {
    return (
        <>
        <span className="loginButton">
            <a data-toggle="modal" data-target="#loginModal">Войти</a>
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
                <h4>Логин</h4>
              </div>
              <div class="d-flex flex-column text-center">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" name="adminUsername" id="email1" placeholder="Введите логин..." onChange={onValueChange}/>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" name="adminPassword" id="password1" placeholder="Введите пароль..." onChange={onValueChange}/>
                  </div>
                  {tokenError ? <span className="error">{tokenError}</span> : null}
                  <button type="submit" class="btn btn-info btn-block btn-round" data-dismiss="modal" onClick={login}>Войти</button>
                </form>
                
          </div>
          </div>
          </div>   
          </div>
          </div>
          </>
          )
};

export default Login;