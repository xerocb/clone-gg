import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
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