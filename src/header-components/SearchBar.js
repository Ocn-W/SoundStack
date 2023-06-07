import React from 'react';
import styles from '../css/header.module.css';

export default function SearchBar() {
    return (
        <div className={styles.searchbar}>
            <input type="search" placeholder='search library'/>
            <button>Search Spotify</button>
        </div>
    );
}

