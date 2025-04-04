import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { attemptLogin, attemptLogout } from "../../api";

export const login = createAsyncThunk("user/login", async (arg, thunkAPI) => {
    const { username, password } = arg;
    try {
        const response = await attemptLogin(username, password);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Login failed`);
        }
        return await response.json();
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logout = createAsyncThunk("user/logout", async (arg, thunkAPI) => {
    try {
        const response = await attemptLogout();
        if (!response.ok) {
            return thunkAPI.rejectWithValue(`Error ${response.status}: Logout failed`);
        }
        return true;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: 0,
        admin: false,
        username: "",
        loading: true,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.admin = action.payload.admin;
                state.username = action.payload.username;
            })
            .addCase(logout.fulfilled, (state) => {
                state.id = 0;
                state.admin = false;
                state.username = "";
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

export default userSlice.reducer;