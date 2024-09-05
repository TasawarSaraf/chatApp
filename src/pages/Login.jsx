import React, {useState} from "react";
import "./styles/Login.css";


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log('Login data: ', {email, password});
    }


    return(
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
            <div className="login-title">
                <h2>Login</h2>
            </div>
                
                <div className="input-form-group">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="input-form-group">
                    <label>Password: </label>
                    <input type="email" value={email} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button className="login-button">Login</button>
            </form>
        </div>
    )
}


export default Login;