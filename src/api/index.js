const ROOT_URL = process.env.REACT_APP_ROOT_URL;

// userSlice

export const attemptLogin = async (username, password) => {
    const endpoint = `${ROOT_URL}/auth/login`;
    
    const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    return response;
};

export const attemptLogout = async () => {
    const endpoint = `${ROOT_URL}/auth/logout`;

    const response = await fetch(endpoint, {
        method: "POST",
        credentials: "include"
    })

    return response;
};

// LoginPage

export const attemptSignup = async (username, password) => {
    const endpoint = `${ROOT_URL}/auth/signup`;

    const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    return response;
};

// AccountPage

export const updatePassword = async (password) => {
    const endpoint = `${ROOT_URL}/auth/update`;

    const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            password
        }),
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    return response;
};

// playerSlice

export const getPlayerByUsername = async (username) => {
    const endpoint = `${ROOT_URL}/player/username/${username}`;

    const response = await fetch(endpoint)
    
    return response;
};

export const getGamesByUsername = async (username) => {
    const endpoint = `${ROOT_URL}/game/${username}`;

    const response = await fetch(endpoint)
    
    return response;
};

export const getGameDetailsByUsername = async (username) => {
    const endpoint = `${ROOT_URL}/game/${username}/detail`;

    const response = await fetch(endpoint)
    
    return response;
};

// ELO

export const getStatsByPlayerId = async (playerId) => {
    const endpoint = `${ROOT_URL}/player/${playerId}/stats`;

    const response = await fetch(endpoint)
    
    return response;
}

// FavouriteChamps

export const getFavChampDataByPlayerId = async (playerId) => {
    const endpoint = `${ROOT_URL}/player/${playerId}/favChamps`;

    const response = await fetch(endpoint)
    
    return response;
};

// RecentlyPlayed

export const getRecentlyPlayedByPlayerId = async (playerId) => {
    const endpoint = `${ROOT_URL}/player/${playerId}/recentlyPlayed`;

    const response = await fetch(endpoint)
    
    return response;
};

// Game

export const getUsernamesByPlayerIds = async (playerIds) => {
    const endpoint = `${ROOT_URL}/player/usernames/${playerIds.join(",")}`;

    const response = await fetch(endpoint)
    
    return response;
}