import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";

export default function Logout() {
    const userId = useSelector(state => state.user.id);
    const dispatch = useDispatch();

    if (userId) {
        dispatch(logout());
    }

    return <Navigate to="/" />;
}