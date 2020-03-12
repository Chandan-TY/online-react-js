import React from 'react'
import LoginContext from '../context-api/loginContext'

export default function Login() {

    const context = React.useContext(LoginContext)
    const login = ()=>{
        // context.loginInfo.changeLogin(true)
        // console.log(context)
        context.changeLogin(true)
    }
    return (
        <div>
            <button onClick={login}>Login</button>        
        </div>
    )
}
