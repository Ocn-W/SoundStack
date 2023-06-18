import React, {useState, useEffect} from "react";
import styles from "../css/mainpage.module.css";

export default function PlaylistPage({ playlistName, songList }) {
  const [playlistSongs, setSongList] = useState([]);

  useEffect(() => {
    setSongList(songList);
  }, [songList]);

  function removeSong(song){
    const updatedList = playlistSongs.filter(item => item.song !== song.song);
    console.log(updatedList)
    setSongList(updatedList);
  }

  return (
    <div className={styles.playlistpage}>
      <div className={styles.pageName}>
        <p>{playlistName}</p>
      </div>
      <div className={styles.pageBtns}>
        <button>Edit Playlist Name</button>
        <button>Delete Playlist</button>
        <button>Upload to Spotify</button>
      </div>
      <div className={styles.pageSongList}>
        {playlistSongs.map((song, index) => (
          <div className={styles.pageSong} key={index}>
            <img src={song.song.artwork} alt="Album Artwork"></img>
            <div className={styles.pageSongInfo}>
              <p>Song: {song.song.name}</p>
              <p>Artist: {song.song.artist}</p>
              <p>Album: {song.song.album}</p>
            </div>
            <button onClick={() => removeSong(song)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
