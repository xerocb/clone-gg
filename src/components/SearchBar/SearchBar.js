import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPlayer } from "../../features/player/playerSlice";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

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
        <div className={styles.container}>
            <input 
                type="text" 
                value={searchTerm}
                placeholder="Player Name"
                className={styles.search}
                onChange={(e)=>setSearchTerm(e.target.value)} 
                onKeyDown={handleKeyDown} 
            />
        </div>
    );
}