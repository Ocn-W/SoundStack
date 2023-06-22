import React, {useState, useContext, useEffect} from "react";
import styles from "../css/mainpage.module.css";
import { PlaylistContext } from "../contexts/PlaylistContext";

export default function PlaylistPage({ playlistName, songList, deletePlaylist, playlistId }) {
  const [playlistSongs, setSongList] = useState([]);
  const [newPlaylistName, setNewName] = useState(playlistName);
  const [editName, isEditingName] = useState(false);
  const [userId, setUserId] = useState(null);
  const [spotifyPlaylistId, setPlaylistId] = useState(null);
  const { isPlaylistSelected } = useContext(PlaylistContext);

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

  async function uploadPlaylist() {
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = urlParams.get("access_token");
//Only works if user has authorized Spotify account
    if (accessToken !== null) {
      const userParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      };
//Retrieve userId from SpotifyAPI
      const userDataResponse = await fetch(
        "https://api.spotify.com/v1/me",
        userParams
      );
      const userData = await userDataResponse.json();
      setUserId(userData.id);
//Creates empty playlist with specified playlistName on Spotify
      const playlistParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify({
          name: playlistName,
          public: true,
        }),
      };
      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        playlistParams
      );
      const playlistData = await playlistResponse.json();
      setPlaylistId(playlistData.id);
//Populate empty playlist with songs selected from userPlaylist.songs (passed as songList prop)
      const songlistParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify({
          uris: songList.map((song) => song.song.uri),
          position: 0,
        }),
      };

      const songlistResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}/tracks`,
        songlistParams
      );
      const songlistData = await songlistResponse.json();
      console.log(songlistData);
      alert("Save successful :) Check your Spotify Playlist!");
    } else {
      alert("Please log in to Spotify to upload your playlist!");
      isPlaylistSelected(false);
    }
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
