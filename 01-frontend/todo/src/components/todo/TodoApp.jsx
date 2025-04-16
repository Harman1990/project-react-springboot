export default function TodoApp(){

    return (

        <div className="TodoApp">
            Sample Check   
            <LoginComponent></LoginComponent>
        </div>


    )

}

function LoginComponent(){
    return (
        <div className="Login">
            <div class="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"></input>
                </div>
                <div>
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}