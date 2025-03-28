import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStatsByPlayerId } from "../../../api";
import ELOLoading from "./ELOLoading";
import ELOError from "./ELOError";
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
                const data = await response.json();
                setStats(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getStats();
    },[playerId]);

    if (loading) {
        return <ELOLoading />;
    }
    if (error) {
        return <ELOError error={error} />;
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