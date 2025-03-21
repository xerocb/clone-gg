import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ containerStyle, searchStyle }) {
    const username = useSelector(state => state.player.player.username);
    const [searchTerm, setSearchTerm] = useState(username ? username : "");
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.target.value) {
            navigate(`/player/${searchTerm}`);
        }
    };
    
    return (
        <div className={containerStyle}>
            <input 
                type="text" 
                value={searchTerm}
                placeholder="Player Name"
                className={searchStyle}
                onChange={(e)=>setSearchTerm(e.target.value)} 
                onKeyDown={handleKeyDown} 
            />
        </div>
    );
}