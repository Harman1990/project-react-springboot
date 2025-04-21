import { useState } from "react"
import './TodoApp.css'
import {BrowserRouter,Routes,Route,useNavigate, useParams} from 'react-router-dom'

export default function TodoApp(){

    return (

        <div className="TodoApp">
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
                    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent></WelcomeComponent>}></Route>
                    <Route path="/todos" element={<ListTodosComponent></ListTodosComponent>}></Route>
                    <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
                </Routes>
            </BrowserRouter>
        </div>


    )

}

function LoginComponent(){

    const [username,setUsername]=useState('harmanLabs')

    const [password,setPassword]=useState('')

    const [showSuccessMessage,setShowSuccessMessage]=useState(false)

    const [showErrorMessage,setShowErrorMessage]=useState(false)

    const navigate=useNavigate()

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
            navigate(`/welcome/${username}`)
        }
        else{
            setShowSuccessMessage(false)
            setShowErrorMessage(true)

        }
        
    }

    

    return (
        <div className="Login">
            

            {showSuccessMessage && <div className="successMessage">Authentication Successfull</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed</div>}
            
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

function WelcomeComponent(){

    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            Welcome {username}
        </div>
    )
}

function ErrorComponent(){

    return (
        <div className="ErrorComponent">
            Error. Invalid Request.
        </div>
    )
}

function ListTodosComponent(){

    const todos=[
                    {id:1, description:'Learn JVM'},
                    {id:2, description:'Learn GC'},
                    {id:3, description:'Learn Multhithreading'}

    ]

    return (

        
        <div className="ListTodosComponent">
            <h1>ToDo Details</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                                )

                            )

                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}