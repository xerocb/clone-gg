import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import Profile from "../../Profile/Profile";
import styles from "./HeaderMain.module.css";
import { Link } from "react-router-dom";

export default function HeaderMain() {
    return  (
        <div className={styles.container}>
            <Link to="/" className={styles.link}>
                <img src="/logo192.png" alt="logo" className={styles.image} />
            </Link>
            <SearchBar containerStyle={styles.searchContainer} searchStyle={styles.searchBar} />
            <Profile containerStyle={styles.profileContainer} linkStyle={styles.profileLink} />
        </div>
    );
}