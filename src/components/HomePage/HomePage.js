import React from "react";
import Profile from "../Profile/Profile";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

export default function HomePage() {
    const admin = useSelector(state => state.user.admin);
    const adminSection = admin ? (
        <div>
            <ul>
                <li>Admin Function 1</li>
                <li>Admin Function 2</li>
            </ul>
        </div>
    ): null;

    return (
        <div>
            <Profile />
            <img src="../../../public/logo512.png" alt="CloneGG logo" />
            <SearchBar />
            {adminSection}
        </div>
    );
}