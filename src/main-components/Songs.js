import React, { useContext } from 'react';
import { SearchBarResult } from '../contexts/SearchBarContext';
import styles from '../css/mainpage.module.css';

export default function Songs({addSong}) {
  const {songs} = useContext(SearchBarResult);
  
  return (
        <>
        {songs.map((song, index) => {
            return (
            <div className={styles.songCard} key={index}>
                <img src={song.artwork} alt='Album Artwork'></img>
                <div className={styles.songInfo}>
                    <p>Song: {song.name}</p>
                    <p>Album: {song.album}</p>
                    <p>Artist: {song.artist}</p>
                </div>
                <button>+</button>
            </div>
            )
        })}
        </>
  )
}
