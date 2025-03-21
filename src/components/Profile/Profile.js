import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    const loggedIn = useSelector(state => state.user.id !== 0);
    if (loggedIn) {
        return (
            <div>
                <ul>
                    <li>Profile</li>
                    <li>Log Out</li>
                </ul>
            </div>
        );
    }
    return (
        <div>
            <ul>
                <li>Sign Up</li>
                <li>Log In</li>
            </ul>
        </div>
    );
}