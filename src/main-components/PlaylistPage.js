import React from 'react';
import styles from '../css/mainpage.module.css';

export default function PlaylistPage() {
  return (
    <div className={styles.playlistpage}>
      <div className={styles.pageBtns}>
        <button>Edit</button>
        <button>Delete</button>
        <button>Upload to Spotify</button>
      </div>
      <div className={styles.pageSongs}>
      </div>
    </div>
  )
}
