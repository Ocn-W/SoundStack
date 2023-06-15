import React from "react";
import styles from "../css/mainpage.module.css";

export default function PlaylistPage({ playlistName, songList }) {
  console.log(`Playlist selected ${playlistName} ${JSON.stringify(songList)}`);

  return (
    <div className={styles.playlistpage}>
      <div className={styles.pageName}>
        <p>{playlistName}</p>
      </div>
      <div className={styles.pageBtns}>
        <button>Edit Playlist</button>
        <button>Delete Playlist</button>
        <button>Upload to Spotify</button>
      </div>
      <div className={styles.pageSongList}>
        {songList.map((song, index) => (
          <div className={styles.pageSong} key={index}>
            <p>{JSON.stringify(song.name)}</p>
            <p>{JSON.stringify(song.artist)}</p>
            <p>{JSON.stringify(song.album)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
