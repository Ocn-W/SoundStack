import React, {useState, useEffect} from "react";
import styles from "../css/mainpage.module.css";

export default function PlaylistPage({ playlistName, songList, deletePlaylist, uploadPlaylist, id }) {
  const [playlistSongs, setSongList] = useState([]);
  const [newPlaylistName, setNewName] = useState(playlistName);
  const [editName, isEditingName] = useState(false);

  useEffect(() => {
    setSongList(songList);
  }, [songList]);

  function removeSong(song){
    const updatedList = playlistSongs.filter(item => item.song !== song.song);
    setSongList(updatedList);
  }

  function handleNameChange(){
    isEditingName(true);
  }
  function handleSaveChange() {
    isEditingName(false);
    setNewName(newPlaylistName);
  }
  function handleInputChange(event) {
    setNewName(event.target.value);
  }

  return (
    <div className={styles.playlistpage}>
      <div className={styles.pageName}>
        {editName ? <input 
        type="text" 
        value={newPlaylistName} 
        onChange={handleInputChange}
      ></input> : <p>{newPlaylistName}</p>}
      </div>
      <div className={styles.pageBtns}>
        {editName ? (
          <div className={styles.pageEditBtns}>
            <button onClick={handleSaveChange}>Save Name</button>
          </div>
        ) : <button onClick={handleNameChange}>Edit Playlist Name</button>}
        <button onClick={deletePlaylist}>Delete Playlist</button>
        <button onClick={uploadPlaylist}>Upload to Spotify</button>
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
