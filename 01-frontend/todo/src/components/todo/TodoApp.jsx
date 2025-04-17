import { useState } from "react"
import './TodoApp.css'

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

    const [showSuccessMessage,setShowSuccessMessage]=useState(false)

    const [showErrorMessage,setShowErrorMessage]=useState(false)

    function handleUsernameChange(event){
        console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){

        if(username=='harman' && password=='dummy'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        }
        else{
            setShowSuccessMessage(false)
            setShowErrorMessage(true)

        }
        
    }

    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return (<div className="successMessage">Authentication Successfull</div>)
        }
        else{
            return  null
        }
    }

    function ErrorMessageComponent(){
        if(showErrorMessage){
            return (<div className="errorMessage">Authentication Failed</div>)
        }
        else{
            return  null
        }
    }

    return (
        <div className="Login">
            <SuccessMessageComponent></SuccessMessageComponent>

            <ErrorMessageComponent></ErrorMessageComponent>
            
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={ handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}