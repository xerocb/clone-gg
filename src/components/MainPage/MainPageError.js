import React from "react";
import Header from "../Header/Header";

export default function MainPageError({ error }) {
    return (
        <div>
            <Header />
            <p>{error.player || error.games || error.gameDetails}</p>
        </div>
    );
}