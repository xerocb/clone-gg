import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavChampDataByPlayerId } from "../../../api";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
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

    let content = (
        <>
            {champs.slice(0, -1).map(champ => <Champion key={champ.name} data={champ} last={false} />)}
            {champs.slice(-1).map(champ => <Champion key={champ.name} data={champ} last={true} />)}
        </>
    );

    if (loading) {
        content = <Loading rounded="bot" />
    } else if (error) {
        content = <Error error={error} rounded="bot" />
    } else if (champs.length === 0) {
        content = <p className={styles.champ}>No games played!</p>;
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Favourite Champions</h3>
            {content}
        </div>
    );
}
