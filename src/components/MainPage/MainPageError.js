import React from "react";

export default function MainPageError({ error }) {
    return <p>{error.player||error.games||error.gameDetails}</p>;
}