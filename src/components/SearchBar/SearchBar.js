import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ containerStyle, searchStyle }) {
    const [searchTerm, setSearchTerm] = useState("");
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