import React from "react";
import styles from "./User.module.css";
import { useSelector } from "react-redux";

export default function User() {
    const username = useSelector(state => state.player.player.username);

    return (
        <div className={styles.container}>
            <img src="/logo192.png" alt="Player Icon" className={styles.image} />
            <div className={styles.username}>
                <h2>{username}</h2>
            </div>
        </div>
    );
}