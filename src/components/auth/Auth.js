import React, { useState} from 'react'
import axios from 'axios';


const Auth = (props) => {
    const [toggle, setToggle] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmailInput = (event) => {
        const { value } = event.target;
        setEmail(value);
    };
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };
    
    const login = () => {
        axios
        .post("/auth/login", {
            email: email,
            password: password,
        })
        .then((res) => {
            props.getUser();
            props.history.push("/backpack");
        })
        .catch((err) => {
            alert("email or password incorrect");
        });
    };
    
    const register = () => {
        axios
        .post("/auth/register", {
            email: email,
            password: password,
        })
        .then((res) => {
            props.getUser();
            props.history.push("/backpack");
        })
        .catch((err) => {
            alert("email already registered");
        });
    };
    
    return (
        <div>
        <h1>{toggle ? "Login" : "Register"}</h1>
        <div>
            <input
            name="email"
            placeholder="email"
            value={email}
            onChange={handleEmailInput}
            />
            <input
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordInput}
            type="password"
            />
            {toggle ? (
            <>
                <button onClick={login}>Login</button>
                <button
                onClick={() => {
                    setToggle(!toggle);
                }}
                >
                Haven't signed up? Click to register
                </button>
            </>
            ) : (
            <>
                <button onClick={register}>Register</button>
                <button
                onClick={() => {
                    setToggle(!toggle);
                }}
                >
                Already signed up? Click to login
                </button>
            </>
            )}
        </div>
        </div>
    );
    };

export default Auth
