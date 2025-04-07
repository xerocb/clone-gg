import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavChampDataByPlayerId } from "../../../api";
import FavouriteChampsLoading from "./FavouriteChampsLoading";
import FavouriteChampsError from "./FavouriteChampsError";
import Champion from "./Champion/Champion";
import styles from "./FavouriteChamps.module.css";

export default function FavouriteChamps() {
    const playerId = useSelector(state => state.player.player.id);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [champs, setChamps] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await getFavChampDataByPlayerId(playerId);
                if (response.status === 204) {
                    setChamps([]);
                } else {
                    const data = await response.json();
                    setChamps(data);
                }
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    },[playerId]);

    if (loading) {
        return <FavouriteChampsLoading />;
    }
    if (error) {
        return <FavouriteChampsError error={error} />;
    }
    if (champs.length === 0) {
        return (
            <div className={styles.container}>
                <h3 className={styles.header}>Favourite Champions</h3>
                <p className={styles.champ}>No games played!</p>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Favourite Champions</h3>
            {champs.slice(0, -1).map(champ => <Champion key={champ.name} data={champ} last={false} />)}
            {champs.slice(-1).map(champ => <Champion key={champ.name} data={champ} last={true} />)}
        </div>
    );
}