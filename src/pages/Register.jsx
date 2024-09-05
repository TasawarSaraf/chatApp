import React from "react";
import { useState } from "react";
import "./styles/Register.css";


const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');



    const handleRegister = (e) =>{
        e.preventDefault();
        if (password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        console.log("Register completed! ", {name, email});
    }


    return (
        <div className="register-container">
            <form onSubmit={handleRegister} className="register-form">
                <div className="register-title">
                    Register
                </div>

                <div className="register-input-group">
                    <label>Name</label>
                    <input type="name" value={name} onChange={(e) =>setName(e.target.value)}></input>
                </div>

                <div className="register-input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>

                <div className="register-input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>

                <div className="register-input-group">
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                </div>

                <button>Register</button>

            </form>
        </div>

    )

}


export default Register;