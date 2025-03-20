import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPlayer = createAsyncThunk("player/getPlayer", async (username, thunkAPI) => {
    try {
        const response = await getPlayerByUsername(username);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Couldn't retrieve player data`);
        }
        return await response.json();
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const getGames = createAsyncThunk("player/getGames", async (playerId, thunkAPI) => {
    try {
        const response = await getGamesByPlayerId(playerId);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Couldn't retrieve game data`);
        }
        return await response.json();
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const getGameDetails = createAsyncThunk("player/getGameDetails", async (playerId, thunkAPI) => {
    try {
        const response = await getGameDetailsByPlayerId(playerId);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Couldn't retrieve game data`);
        }
        return await response.json();
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
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlayer.fulfilled, (state, action) => {
                state.player = action.payload;
            })
            .addCase(getGames.fulfilled, (state, action) => {
                state.games = action.payload;
            })
            .addCase(getGameDetails.fulfilled, (state, action) => {
                state.gameDetails = action.payload;
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state) => {
                    state.loading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )
    }
});

export default playerSlice.reducer;