import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile({ containerStyle, linkStyle }) {
    const loggedIn = useSelector(state => state.user.id !== 0);
    if (loggedIn) {
        return (
            <div className={containerStyle}>
                <ul>
                    <li><Link to="/profile" className={linkStyle}>Profile</Link></li>
                    <li><Link to="/logout" className={linkStyle}>Log Out</Link></li>
                </ul>
            </div>
        );
    }
    return (
        <div className={containerStyle}>
            <ul>
                <li><Link to="/signup" className={linkStyle}>Sign Up</Link></li>
                <li><Link to="/login" className={linkStyle}>Log In</Link></li>
            </ul>
        </div>
    );
}