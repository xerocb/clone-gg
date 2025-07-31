import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRecentlyPlayedByPlayerId } from "../../../api";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
import Player from "./Player/Player";
import styles from "./RecentlyPlayed.module.css";

export default function RecentlyPlayed() {
    const playerId = useSelector(state => state.player.player.id);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await getRecentlyPlayedByPlayerId(playerId);
                if (response.status === 204) {
                    setPlayers([]);
                } else {
                    const data = await response.json();
                    setPlayers(data);
                }
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    },[playerId]);

    let content = (
        <>
            {players.slice(0, -1).map(player => <Player key={player.username} data={player} last={false} />)}
            {players.slice(-1).map(player => <Player key={player.username} data={player} last={true} />)}
        </>
    );

    if (loading) {
        content = <Loading rounded="bot" />;
    }
    if (error) {
        content = <Error error={error} rounded="bot" />;
    }
    if (players.length === 0) {
        content = <p className={styles.player}>No games played!</p>;
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Recently Played With</h3>
            {content}
        </div>
    );
}