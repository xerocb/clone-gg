import React from "react";
import styles from "./Games.module.css";
import Summary from "./Summary/Summary";
import Game from "./Game/Game";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

export default function Games() {
    const gameIds = useSelector(
        createSelector(
            state => state.player.games,
            games => games.map(game => game.id)
        )
    );

    if (gameIds.length === 0) {
        return (
            <div>
                <h3 className={styles.header}>Recent Games</h3>
                <p className={styles.summary}>No games played!</p>
            </div>
        );
    }

    return (
        <div>
            <h3 className={styles.header}>Recent Games</h3>
            <Summary />
            {gameIds.map(id => <Game key={id} gameId={id} />)}
        </div>
    );
}