import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStatsByPlayerId } from "../../../api";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
import styles from "./ELO.module.css";

export default function ELO() {
    const playerId = useSelector(state => state.player.player.id);
    const playerElo = useSelector(state => state.player.player.elo);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const getStats = async () => {
            setLoading(true);
            try {
                const response = await getStatsByPlayerId(playerId);
                if (response.status === 204) {
                    setStats({});
                } else {
                    const data = await response.json();
                    setStats(data);
                }
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getStats();
    },[playerId]);

    if (loading) {
        return <Loading rounded="all" />
    }
    if (error) {
        return <Error error={error} rounded="all" />
    }

    if (Object.keys(stats).length === 0) {
        return (
            <div className={styles.container}>
                <h3 className={styles.elo}>ELO: {playerElo}</h3>
                <div className={styles.minor}>
                    <p>No games played!</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.elo}>ELO: {playerElo}</h3>
            <div className={styles.minor}>
                <p>{stats.wins}W {stats.losses}L</p>
                <p>Win rate {stats.winrate}%</p>
            </div>
        </div>
    );
}