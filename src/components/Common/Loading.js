import React from "react";
import styles from "./Common.module.css";

export default function Loading({ rounded, margin, background }) {
    const rounding = rounded === "all" ? styles.roundedAll : rounded === "bot" ? styles.roundedBot : "";
    const hasMargin = margin ? styles.margin : "";
    return (
        <div className={`${styles.container} ${rounding} ${hasMargin}`}>
            <div className={styles.spinner}></div>
        </div>
    );
}