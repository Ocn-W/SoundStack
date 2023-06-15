import React from "react";
import styles from "../css/mainpage.module.css";

export default function Songs({ addNewSong, name, artist, album, artwork }) {
  return (
    <>
      <div className={styles.songCard}>
        <img src={artwork} alt="Album Artwork"></img>
        <div className={styles.songInfo}>
          <p>Song: {name}</p>
          <p>Album: {album}</p>
          <p>Artist: {artist}</p>
        </div>
        <button onClick={addNewSong}>+</button>
      </div>
    </>
  );
}
