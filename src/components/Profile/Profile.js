import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

export default function Profile() {
    const loggedIn = useSelector(state => state.user.id !== 0);
    if (loggedIn) {
        return (
            <div className={styles.container}>
                <ul>
                    <li><Link to="/profile" className={styles.link}>Profile</Link></li>
                    <li><Link to="/logout" className={styles.link}>Log Out</Link></li>
                </ul>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <ul>
                <li><Link to="/signup" className={styles.link}>Sign Up</Link></li>
                <li><Link to="/login" className={styles.link}>Log In</Link></li>
            </ul>
        </div>
    );
}