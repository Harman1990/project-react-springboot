import { useState } from "react"

export default function TodoApp(){

    return (

        <div className="TodoApp">
            
            <LoginComponent></LoginComponent>
        </div>


    )

}

function LoginComponent(){

    const [username,setUsername]=useState('harmanLabs')

    const [password,setPassword]=useState('')

    function handleUsernameChange(event){
        console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    return (
        <div className="Login">
            <div class="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}