import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPageLoading from "./MainPageLoading";
import MainPageError from "./MainPageError";
import { getGameDetails, getGames, getPlayer } from "../../features/player/playerSlice";
import HeaderMain from "./HeaderMain/HeaderMain";
import User from "./User/User";
import ELO from "./ELO/ELO";
import FavouriteChamps from "./FavouriteChamps/FavouriteChamps";
import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";
import Games from "./Games/Games";
import styles from "./MainPage.module.css";
import { useParams } from "react-router-dom";

export default function MainPage() {
    const loading = useSelector(state => state.player.loading);
    const error = useSelector(state => state.player.error);
    const username = useParams().username;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayer(username));
        dispatch(getGames(username));
        dispatch(getGameDetails(username));
    },[username])

    if (loading) {
        return <MainPageLoading />;
    }
    if (error) {
        return <MainPageError error={error} />;
    }

    return (
        <div>
            <div>
                <HeaderMain />
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