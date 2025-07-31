import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Common/Loading";
import Error from "../Common/Error";
import { getGameDetails, getGames, getPlayer } from "../../features/player/playerSlice";
import Header from "../Header/Header";
import User from "./User/User";
import ELO from "./ELO/ELO";
import FavouriteChamps from "./FavouriteChamps/FavouriteChamps";
import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";
import Games from "./Games/Games";
import styles from "./MainPage.module.css";
import { useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";

export default function MainPage() {
    const loading = useSelector(
        createSelector(
            state => state.player.loading,
            loading => ({ ...loading })
        )
    );
    const error = useSelector(
        createSelector(
            state => state.player.error,
            error => ({ ...error })
        )
    );
    const username = useParams().username;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayer(username));
        dispatch(getGames(username));
        dispatch(getGameDetails(username));
    },[dispatch, username])

    if (loading.player || loading.games || loading.gameDetails) {
        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }
    if (error.player || error.games || error.gameDetails) {
        const firstError = error.player ? error.player : error.games ? error.games : error.gameDetails;
        return (
            <>
                <Header />
                <Error error={firstError} />
            </>
        );
    }

    return (
        <div>
            <div>
                <Header />
                <User />
            </div>
            <div className={styles.main}>
                <div className={styles.side}>
                    <ELO />
                    <FavouriteChamps />
                    <RecentlyPlayed />
                </div>
                <Games />
            </div>
        </div>
    );
}