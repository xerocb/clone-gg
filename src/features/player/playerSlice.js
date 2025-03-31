import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlayerByUsername, getGamesByUsername, getGameDetailsByUsername } from "../../api";

export const getPlayer = createAsyncThunk("player/getPlayer", async (username, thunkAPI) => {
    try {
        const response = await getPlayerByUsername(username);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Couldn't retrieve player data`);
        }
        const data = await response.json();
        return data;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const getGames = createAsyncThunk("player/getGames", async (username, thunkAPI) => {
    try {
        const response = await getGamesByUsername(username);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Couldn't retrieve game data`);
        }
        const data = await response.json();
        return data;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const getGameDetails = createAsyncThunk("player/getGameDetails", async (username, thunkAPI) => {
    try {
        const response = await getGameDetailsByUsername(username);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Couldn't retrieve game data`);
        }
        const data = await response.json();
        return data;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

const playerSlice = createSlice({
    name: "player",
    initialState: {
        player: {},
        games: [],
        gameDetails: [],
        loading: {
            player: true,
            games: true,
            gameDetails: true
        },
        error: {
            player: null,
            games: null,
            gameDetails: null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlayer.pending, (state) => {
                state.loading.player = true;
                state.error.player = null;
            })
            .addCase(getPlayer.fulfilled, (state, action) => {
                state.loading.player = false;
                state.error.player = null;
                state.player = action.payload;
            })
            .addCase(getPlayer.rejected, (state, action) => {
                state.loading.player = false;
                state.error.player = action.payload;
            })
            .addCase(getGames.pending, (state) => {
                state.loading.games = true;
                state.error.games = null;
            })
            .addCase(getGames.fulfilled, (state, action) => {
                state.loading.games = false;
                state.error.games = null;
                state.games = action.payload;
            })
            .addCase(getGames.rejected, (state, action) => {
                state.loading.games = false;
                state.error.games = action.payload;
            })
            .addCase(getGameDetails.pending, (state) => {
                state.loading.gameDetails = true;
                state.error.gameDetails = false;
            })
            .addCase(getGameDetails.fulfilled, (state, action) => {
                state.loading.gameDetails = false;
                state.error.gameDetails = null;
                state.gameDetails = action.payload;
            })
            .addCase(getGameDetails.rejected, (state, action) => {
                state.loading.gameDetails = false;
                state.error.gameDetails = action.payload;
            })
    }
});

export default playerSlice.reducer;