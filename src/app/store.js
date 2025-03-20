import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import playerReducer from "../features/player/playerSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        player: playerReducer
    }
});