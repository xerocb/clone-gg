import React from "react";
import Profile from "../Profile/Profile";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const admin = useSelector(state => state.user.admin);
    const adminSection = admin ? (
        <div>
            <ul className={styles.admin}>
                <li>Admin Function 1</li>
                <li>Admin Function 2</li>
            </ul>
        </div>
    ): null;

    return (
        <div className={styles.container}>
            <Profile />
            <img src="/logo512.png" alt="CloneGG logo" className={styles.image} />
            <SearchBar />
            {adminSection}
        </div>
    );
}