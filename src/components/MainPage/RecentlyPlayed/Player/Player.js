import React from "react";
import styles from "./Player.module.css";

export default function Player({ data, last }) {
    const style = last ? styles.last : null;
    return (
        <div className={`${styles.container} ${style}`}>
            <img src="/logo192.png" alt={`${data.name} icon`} className={styles.icon} />
            <div className={styles.main}>
                <p className={styles.name}>{data.name}</p>
            </div>
            <div className={styles.games}>
                <p className={styles.top}>{data.wins}W / {data.losses}L</p>
                <p className={styles.bottom}>{data.wins + data.losses} Games</p>
            </div>
            <div className={styles.winrate}>
                <p className={styles.wr}>{(data.wins/(data.wins+data.losses)*100).toFixed(0)}%</p>
            </div>
        </div>
    );
}