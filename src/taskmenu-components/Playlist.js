import { useState } from 'react';
import styles from '../css/taskMenu.module.css'

export default function Playlist() {

    function handleClick() {
        
    }
  return (
    <div className={styles.playlist}>
        <p>Playlist</p>
        <button onClick={handleClick}>+</button>
    </div>
  );
}

