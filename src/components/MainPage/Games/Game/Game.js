import { createSelector } from "@reduxjs/toolkit";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Loading from "../../../Common/Loading";
import Error from "../../../Common/Error";
import styles from "./Game.module.css";
import { getUsernamesByPlayerIds } from "../../../../api";
import { Link } from "react-router-dom";

const gameDetailSelectorFactory = (gameId) => createSelector(
    state => state.player.gameDetails,
    gameDetails => gameDetails.filter(d => d.game_id === gameId)
);

export default function Game({ gameId }) {
    const playerId = useSelector(state => state.player.player.id);
    const playerName = useSelector(state => state.player.player.username);
    const game = useSelector(
        createSelector(
            state => state.player.games,
            games => games.filter(game => game.id === gameId)[0]
        )
    );
    const gameDetailSelector = useMemo(() => gameDetailSelectorFactory(gameId), [gameId]);
    const gameDetails = useSelector(gameDetailSelector);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usernames, setUsernames] = useState([]);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await getUsernamesByPlayerIds(gameDetails.map(d => d.player_id));
                const data = await response.json();
                setUsernames(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    },[gameDetails]);

    if (loading) {
        return <Loading rounded="all" margin />;
    }

    if (error) {
        return <Error error={error} rounded="all" margin />;
    }

    const playerDetails = gameDetails.filter(d => d.player_id === playerId)[0];
    const win = playerDetails.team === game.winning_team;
    const winLoss = win ? styles.win : styles.lose;
    const gameLength = moment(game.game_end).diff(moment(game.game_start), 's');
    const minutes = Math.floor(gameLength / 60);
    const seconds = gameLength % 60;
    const teamKills = gameDetails.filter(d => d.team === playerDetails.team).reduce((acc, d) => acc + d.kills, 0);
    const killPercentage = ((playerDetails.kills+playerDetails.assists) * 100 / teamKills).toFixed(0);

    return (
        <div className={`${styles.container} ${winLoss}`}>
            <div className={styles.time}>
                <p>{moment(game.game_end).fromNow()}</p>
                <p className={styles.bold}>{win ? "Victory" : "Defeat"}</p>
                <p>{minutes}m {seconds}s</p>
            </div>
            <div className={styles.champ}>
                <img src="/user.png" alt="Champion logo" className={styles.icon} />
                <div>
                    <p className={styles.kda}>
                        {playerDetails.kills} / {playerDetails.deaths} / {playerDetails.assists}
                    </p>
                    <p>{((playerDetails.kills+playerDetails.assists)/playerDetails.deaths).toFixed(2)}:1 KDA</p>
                </div>
            </div>
            <div className={styles.stats}>
                <div>
                    <p>P/Kill {killPercentage}%</p>
                    <p>CS {playerDetails.creep_score} ({(playerDetails.creep_score/gameLength*60).toFixed(1)})</p>
                </div>
            </div>
            <div className={styles.players}>
                {usernames.map(
                    name => 
                        <Link to={`/player/${name}`} className={styles.link} key={name}>
                            <div className={styles.player}>
                                <img src="/user.png" alt="Champion logo" className={styles.icon} />
                                <p className={styles.name + (name === playerName ? " " + styles.own : "")}>
                                    {name}
                                </p>
                            </div>
                        </Link>
                )}
            </div>
        </div>
    );
}
