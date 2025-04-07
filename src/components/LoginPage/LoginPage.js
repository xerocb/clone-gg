import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { attemptSignup } from "../../api";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ type }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signupResponse, setSignupResponse] = useState("");
    const [loginResponse, setLoginResponse] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSignup = type === "signup";
    const titleText = isSignup ? "Sign Up" : "Log In";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignup) {
            setSignupResponse("");
            const response = await attemptSignup(username, password);
            if (response.ok) {
                setSignupResponse("Sign up successful! Please proceed to the login page and enter your credentials.");
            } else {
                const text = await response.text();
                setSignupResponse(text);
            }
        } else {
            setLoginResponse("");
            try {
                await dispatch(login({ username, password })).unwrap();
                navigate("/");
            } catch(err) {
                setLoginResponse(err);
            }
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.header}>{titleText}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input 
                        id="username"
                        className={styles.input}
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input 
                        id="password"
                        className={styles.input}
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <button type="submit" className={styles.button}>{titleText}</button>
                </form>
                {isSignup && signupResponse && <p>{signupResponse}</p>}
                {!isSignup && loginResponse && <p>{loginResponse}</p> }
            </div>
        </div>
    );
}