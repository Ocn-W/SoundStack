import React from 'react';
import styles from '../css/mainpage.module.css';

export default function SavedSongs({name, artist, album, artwork}) {
  return (
    <div className={styles.formPlaylistCard}>
            <img src={artwork} alt="Album Artwork"></img>
          <div className={styles.cardInfo}>
            <p>Song: {name}</p>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
          </div>
    </div>
  )
}
