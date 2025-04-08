import React from "react";
import styles from "./Summary.module.css";
import { useSelector } from "react-redux";

export default function Summary() {
    const playerId = useSelector(state => state.player.player.id);
    const games = useSelector(state => state.player.games);
    const gameDetails = useSelector(state => state.player.gameDetails);
    const detailsForPlayer = gameDetails.filter(game => game.player_id === playerId);
    const noOfGames = games.length;

    let [wins, playerKills, playerDeaths, playerAssists, teamKills] = [0, 0, 0, 0, 0];
    let championStats = {};
    let roleStats = {};
    for (let i = 0; i < noOfGames; i++) {
        playerKills += detailsForPlayer[i].kills;
        playerDeaths += detailsForPlayer[i].deaths;
        playerAssists += detailsForPlayer[i].assists;

        const gameId = games[i].id;
        const playerTeam = detailsForPlayer[i].team;
        const detailsForTeammates = gameDetails.filter(
            game => game.game_id === gameId && 
            game.team === playerTeam && 
            game.player_id !== playerId
        );

        for (let j = 0; j < detailsForTeammates.length; j++) {
            teamKills += detailsForTeammates[j].kills;
        }

        const champId = detailsForPlayer[i].champion_id;
        
        if (!championStats[champId]) {
            championStats[champId] = { 
                games: 0, 
                wins: 0,
                kills: 0,
                deaths: 0,
                assists: 0
            };
        }

        championStats[champId].games++;
        championStats[champId].kills += detailsForPlayer[i].kills;
        championStats[champId].deaths += detailsForPlayer[i].deaths;
        championStats[champId].assists += detailsForPlayer[i].assists;

        console.log(games);
        console.log(detailsForPlayer);

        if (games[i].winning_team === playerTeam) {
            wins++;
            championStats[champId].wins++;
        }

        const role = detailsForPlayer[i].role;

        if (!roleStats[role]) {
            roleStats[role] = 0;
        }

        roleStats[role]++;
    }

    const topChamps = Object.entries(championStats).sort((a,b) => b[1].games - a[1].games).slice(0, 3);
    const topRole = Object.entries(roleStats).sort((a,b) => b[1] - a[1]).slice(0, 1);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <p className={styles.header}>{noOfGames}G {wins}W {noOfGames-wins}L</p>
                <div className={styles.details}>
                    <p className={styles.wr}>{(wins*100/noOfGames).toFixed(0)}%</p> 
                    <div>
                        <p className={styles.averages}>
                            {(playerKills/noOfGames).toFixed(1)} /
                            {" " + (playerDeaths/noOfGames).toFixed(1)} /
                            {" " + (playerAssists/noOfGames).toFixed(1)}
                        </p>
                        <p className={styles.ratio}>{((playerKills+playerAssists)/playerDeaths).toFixed(2)} : 1</p>
                        <p className={styles.pKill}>P/Kill {((playerKills+playerAssists)*100/(playerKills+teamKills)).toFixed(0)}%</p>
                    </div>
                </div>
            </div>
            <div className={styles.column}>
                <p className={styles.header}>Preferred Champions</p>
                <div className={styles.champs}>
                    {topChamps.map(champ =>
                        <div key={champ[0]} className={styles.champ}>
                            <img src="/logo192.png" alt="Champion icon" className={styles.icon} />
                            <p>{(champ[1].wins*100/champ[1].games).toFixed(0)}%</p>
                            <p>({champ[1].wins}W / {champ[1].games-champ[1].wins}L)</p>
                            <p>{((champ[1].kills+champ[1].assists)/champ[1].deaths).toFixed(2)}:1 KDA</p>
                        </div>
                    )}
                </div>
                <div className={styles.champsMobile}>
                    {topChamps.slice(0, 2).map(champ =>
                        <div key={champ[0]} className={styles.mobile}>
                            <img src="/logo192.png" alt="Champion icon" className={styles.icon} />
                            <p>{(champ[1].wins*100/champ[1].games).toFixed(0)}%</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.column}>
                <p className={styles.header}>Preferred Role</p>
                <div className={styles.roles}>
                    <div className={styles.role}>
                        <p>{roleStats.top ? (roleStats.top*100/noOfGames).toFixed(0) : 0}%</p>
                        <p>Top</p>
                    </div>
                    <div className={styles.role}>
                        <p>{roleStats.jgl ? (roleStats.jgl*100/noOfGames).toFixed(0) : 0}%</p>
                        <p>Jgl</p>
                    </div>
                    <div className={styles.role}>
                        <p>{roleStats.mid ? (roleStats.mid*100/noOfGames).toFixed(0) : 0}%</p>
                        <p>Mid</p>
                    </div>
                    <div className={styles.role}>
                        <p>{roleStats.bot ? (roleStats.bot*100/noOfGames).toFixed(0) : 0}%</p>
                        <p>Bot</p>
                    </div>
                    <div className={styles.role}>
                        <p>{roleStats.sup ? (roleStats.sup*100/noOfGames).toFixed(0) : 0}%</p>
                        <p>Sup</p>
                    </div>
                </div>
                <div className={styles.rolesMobile}>
                    <div className={styles.mobile}>
                        <img src="/logo192.png" alt="Role icon" className={styles.icon} />
                        <p className={styles.mobileP}>{(topRole[0][1]*100/noOfGames).toFixed(0)}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}