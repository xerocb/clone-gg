import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRecentlyPlayedByPlayerId } from "../../../api";
import RecentlyPlayedLoading from "./RecentlyPlayedLoading";
import RecentlyPlayedError from "./RecentlyPlayedError";
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
                const data = await response.json();
                setPlayers(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    },[playerId]);

    if (loading) {
        return <RecentlyPlayedLoading />;
    }
    if (error) {
        return <RecentlyPlayedError error={error} />;
    }
    if (players.length === 0) {
        return;
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Recently Played With</h3>
            {players.slice(0, -1).map(player => <Player key={player.name} data={player} last={false} />)}
            {players.slice(-1).map(player => <Player key={player.name} data={player} last={true} />)}
        </div>
    );
}