import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStatsByPlayerId } from "../../../api";
import ELOLoading from "./ELOLoading";
import ELOError from "./ELOError";
import styles from "./ELO.module.css";

export default function ELO() {
    const player = useSelector(state => state.player.player);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const getStats = async () => {
            setLoading(true);
            try {
                const response = await getStatsByPlayerId(player.id);
                const data = await response.json();
                setStats(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getStats();
    },[player]);

    if (loading) {
        return <ELOLoading />;
    }
    if (error) {
        return <ELOError error={error} />;
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.elo}>ELO: {player.elo}</h3>
            <div className={styles.minor}>
                <p>{stats.wins}W {stats.losses}L</p>
                <p>Win rate {stats.winrate}%</p>
            </div>
        </div>
    );
}