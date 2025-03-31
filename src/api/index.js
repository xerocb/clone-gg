// userSlice

export const attemptLogin = async (username, password) => {
    return new Response(JSON.stringify({ id: 1, admin: true }));
};

export const attemptLogout = async () => {
    return new Response(null, { status: 204 });
};

// playerSlice

export const getPlayerByUsername = async (username) => {
    return new Response(JSON.stringify({
        id: 1,
        username: "PlayerOne",
        elo: 1000,
        icon_id: 1
    }));
};

export const getGamesByUsername = async (username) => {
    return new Response(JSON.stringify([
        {
            id: 1,
            winning_team: "red",
            game_start: "2025-03-14T10:30:00.123Z",
            game_end: "2025-03-14T10:58:32.312Z"
        },
        {
            id: 2,
            winning_team: "blue",
            game_start: "2025-03-14T18:34:16.012Z",
            game_end: "2025-03-14T18:50:33.000Z"
        },
        {
            id: 3,
            winning_team: "red",
            game_start: "2025-03-14T23:54:47.111Z",
            game_end: "2025-03-15T00:19:03.123Z"
        }
    ]));
};

export const getGameDetailsByUsername = async (username) => {
    return new Response(JSON.stringify([
        {
            id: 1,
            game_id: 1,
            player_id: 1,
            champion_id: 1,
            team: "red",
            role: "top",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 2,
            game_id: 1,
            player_id: 2,
            champion_id: 2,
            team: "red",
            role: "jgl",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 3,
            game_id: 1,
            player_id: 3,
            champion_id: 3,
            team: "red",
            role: "mid",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 4,
            game_id: 1,
            player_id: 4,
            champion_id: 4,
            team: "red",
            role: "bot",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 5,
            game_id: 1,
            player_id: 5,
            champion_id: 5,
            team: "red",
            role: "sup",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 20
        },
        {
            id: 6,
            game_id: 1,
            player_id: 6,
            champion_id: 6,
            team: "blue",
            role: "top",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 7,
            game_id: 1,
            player_id: 7,
            champion_id: 7,
            team: "blue",
            role: "jgl",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 8,
            game_id: 1,
            player_id: 8,
            champion_id: 8,
            team: "blue",
            role: "mid",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 9,
            game_id: 1,
            player_id: 9,
            champion_id: 9,
            team: "blue",
            role: "bot",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 10,
            game_id: 1,
            player_id: 10,
            champion_id: 10,
            team: "blue",
            role: "sup",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 20
        },
        {
            id: 11,
            game_id: 2,
            player_id: 1,
            champion_id: 1,
            team: "red",
            role: "top",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 12,
            game_id: 2,
            player_id: 2,
            champion_id: 2,
            team: "red",
            role: "jgl",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 13,
            game_id: 2,
            player_id: 3,
            champion_id: 3,
            team: "red",
            role: "mid",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 14,
            game_id: 2,
            player_id: 4,
            champion_id: 4,
            team: "red",
            role: "bot",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 15,
            game_id: 2,
            player_id: 5,
            champion_id: 5,
            team: "red",
            role: "sup",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 20
        },
        {
            id: 16,
            game_id: 2,
            player_id: 6,
            champion_id: 6,
            team: "blue",
            role: "top",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 17,
            game_id: 2,
            player_id: 7,
            champion_id: 7,
            team: "blue",
            role: "jgl",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 18,
            game_id: 2,
            player_id: 8,
            champion_id: 8,
            team: "blue",
            role: "mid",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 19,
            game_id: 2,
            player_id: 9,
            champion_id: 9,
            team: "blue",
            role: "bot",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 20,
            game_id: 2,
            player_id: 10,
            champion_id: 10,
            team: "blue",
            role: "sup",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 20
        },
        {
            id: 21,
            game_id: 3,
            player_id: 1,
            champion_id: 1,
            team: "red",
            role: "top",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 22,
            game_id: 3,
            player_id: 2,
            champion_id: 2,
            team: "red",
            role: "jgl",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 23,
            game_id: 3,
            player_id: 3,
            champion_id: 3,
            team: "red",
            role: "mid",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 24,
            game_id: 3,
            player_id: 4,
            champion_id: 4,
            team: "red",
            role: "bot",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 25,
            game_id: 3,
            player_id: 5,
            champion_id: 5,
            team: "red",
            role: "sup",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 20
        },
        {
            id: 26,
            game_id: 3,
            player_id: 6,
            champion_id: 6,
            team: "blue",
            role: "top",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 27,
            game_id: 3,
            player_id: 7,
            champion_id: 7,
            team: "blue",
            role: "jgl",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 28,
            game_id: 3,
            player_id: 8,
            champion_id: 8,
            team: "blue",
            role: "mid",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 29,
            game_id: 3,
            player_id: 9,
            champion_id: 9,
            team: "blue",
            role: "bot",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 200
        },
        {
            id: 30,
            game_id: 3,
            player_id: 10,
            champion_id: 10,
            team: "blue",
            role: "sup",
            kills: 1,
            deaths: 2,
            assists: 3,
            damage_dealt: 20000,
            damage_taken: 20000,
            creep_score: 20
        }
    ]));
};

// ELO

export const getStatsByPlayerId = async (playerId) => {
    return new Response(JSON.stringify({
        wins: 2,
        losses: 1,
        winrate: 67
    }));
}

// FavouriteChamps

export const getFavChampDataByPlayerId = async (playerId) => {
    return new Response(JSON.stringify([
        {
            name: "ChampOne",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        },
        {
            name: "ChampTwo",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        },
        {
            name: "ChampThree",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        },
        {
            name: "ChampFour",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        },
        {
            name: "ChampFive",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        },
        {
            name: "ChampSix",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        },
        {
            name: "ChampSeven",
            cs: 200,
            kills: 2.4,
            deaths: 3.1,
            assists: 5.6,
            wins: 21,
            games: 38
        }
    ]));
};

// RecentlyPlayed

export const getRecentlyPlayedByPlayerId = async (playerId) => {
    return new Response(JSON.stringify([
        {
            name: "PlayerTwo",
            wins: 9,
            losses: 11
        },
        {
            name: "PlayerThree",
            wins: 9,
            losses: 11
        },
        {
            name: "PlayerFour",
            wins: 9,
            losses: 11
        },
        {
            name: "PlayerFive",
            wins: 9,
            losses: 11
        },
        {
            name: "PlayerSix",
            wins: 9,
            losses: 11
        },
        {
            name: "PlayerSeven",
            wins: 9,
            losses: 11
        },
        {
            name: "PlayerEight",
            wins: 9,
            losses: 11
        }
    ]));
};

// Game

export const getUsernamesByPlayerIds = async (playerIds) => {
    return new Response(JSON.stringify([
        "PlayerOne",
        "PlayerTwo",
        "PlayerThree",
        "PlayerFour",
        "PlayerFive",
        "PlayerSix",
        "PlayerSeven",
        "PlayerEight",
        "PlayerNine",
        "PlayerTen"
    ]));
}