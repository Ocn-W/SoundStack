import React from 'react';
import styles from '../css/mainpage.module.css';

export default function FormPlaylist() {
  return (
    <>
    <div className={styles.formPlaylistName}>
        <input type='text' placeholder='Name Your Playlist!'/>
    </div>
    <div className={styles.formPlaylistSongs}>
        <p>Songs go here</p>
    </div>
    <div className={styles.formPlaylistBtns}>
        <button>Save Playlist</button>
        <button>Publish to Spotify</button>
    </div>
    </>
  )
}
