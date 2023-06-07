import React from 'react';
import styles from '../css/mainpage.module.css';

export default function PlaylistPage({playlistName}) {
  return (
    <div className={styles.playlistpage}>
      <div className={styles.pageName}>
        <p>{playlistName}</p>
      </div>
      <div className={styles.pageBtns}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div className={styles.pageSongs}>
        <ul>
          <li>Track one</li>
          <li>Track two</li>
          <li>Track three</li>
        </ul>
      </div>
    </div>
  )
}
