import React, { useEffect, useState } from "react";
import styles from "../LoginPage/LoginPage.module.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { updatePassword } from "../../api";
import { Navigate } from "react-router-dom";

export default function AccountPage() {
    const username = useSelector(state => state.user.username);
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("");
    },[password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        const response = await updatePassword(password);
        if (response.ok) {
            setMessage("Password successfully updated.");
            setPassword("");
        } else {
            const text = await response.text();
            setMessage(text);
        }
    };

    if (username) {
        return (
            <div>
                <Header />
                <div className={styles.container}>
                    <h2 className={styles.header}>Profile</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input 
                            id="username"
                            className={styles.inputReadonly}
                            type="text" 
                            value={username} 
                            readOnly />
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input 
                            id="password"
                            className={styles.input}
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <button type="submit" className={styles.button}>Update Password</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        );
    }

    return <Navigate to="/login" />;
}