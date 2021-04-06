import React from 'react';
import Login from './login/login';
import './app-header.css';


const AppHeader = ({login, onValueChange, tokenIsSet, tokenError, logout}) => {
    return (
        <div className="app-header d-flex justify-content-between">
            <h1>Задачник BeeJee</h1>
            {tokenIsSet ? <button className='btn btn-info' onClick={logout}>Выход</button> :  <Login login={login} onValueChange={onValueChange} tokenError={tokenError}/>}
            
        </div>
    )
}

export default AppHeader;