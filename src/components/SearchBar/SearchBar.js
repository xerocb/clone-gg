import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPlayer } from "../../features/player/playerSlice";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            dispatch(getPlayer(searchTerm))
            navigate(`/player/${searchTerm}`);
        }
    };
    
    return (
        <input 
            type="text" 
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)} 
            onKeyDown={handleKeyDown} 
        />
    );
}