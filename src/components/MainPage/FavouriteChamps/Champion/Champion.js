import React from "react";
import styles from "./Champion.module.css";

export default function Champion({ data, last }) {
    const style = last ? styles.last : null;
    return (
        <div className={`${styles.container} ${style}`}>
            <img src="/logo192.png" alt={`${data.name} icon`} className={styles.icon} />
            <div className={styles.main}>
                <p className={`${styles.top} ${styles.name}`}>{data.name}</p>
                <p className={styles.bottom}>CS {data.cs}</p>
            </div>
            <div className={styles.kda}>
                <p className={styles.top}>{((data.kills+data.assists)/data.deaths).toFixed(2)}:1 KDA</p>
                <p className={styles.bottom}>{data.kills} / {data.deaths} / {data.assists}</p>
            </div>
            <div className={styles.winrate}>
                <p className={styles.top}>{(data.wins/data.games*100).toFixed(0)}%</p>
                <p className={styles.bottom}>{data.games} Games</p>
            </div>
        </div>
    );
}