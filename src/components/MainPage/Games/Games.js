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
            (games) => games.map(game => game.id)
        )
    );

    return (
        <div>
            <h3 className={styles.header}>Recent Games</h3>
            {/* <Summary /> */}
            {gameIds.slice(0, -1).map(id => <Game key={id} gameId={id} last={false} />)}
            {gameIds.slice(-1).map(id => <Game key={id} gameId={id} last={true} />)}
        </div>
    );
}