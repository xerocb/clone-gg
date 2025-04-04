import React from "react";
import Profile from "../Profile/Profile";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const admin = useSelector(state => state.user.admin);
    const adminSection = admin ? null : null;

    return (
        <div className={styles.container}>
            <Profile containerStyle={styles.profileContainer} linkStyle={styles.profileLink} />
            <img src="/logo512.png" alt="CloneGG logo" className={styles.image} />
            <SearchBar containerStyle={styles.searchContainer} searchStyle={styles.searchBar} />
            {adminSection}
        </div>
    );
}