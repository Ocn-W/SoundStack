import React, { useContext } from "react";
import styles from "../css/mainpage.module.css";
import Songs from "./Songs";
import {
  ListNameContext,
  PlaylistContext,
  SonglistContext,
  GeneratePlaylist,
} from "../contexts/PlaylistContext";
import { SearchBarResult } from "../contexts/SearchBarContext";
import SavedSongs from "./SavedSongs";

export default function SearchPage() {
  const { isSaving } = useContext(PlaylistContext);
  const { userPlaylist, addToPlaylist } = useContext(SonglistContext);
  const { playlistName, setPlaylistName } = useContext(ListNameContext);
  const { songs, addSong, songsAdded } = useContext(SearchBarResult);
  const { buildPlaylist, isBuildingPlaylist } = useContext(PlaylistContext);
  const { userPlaylistId, setPlaylistId } = useContext(GeneratePlaylist);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 20;
  const playlistId = Array.from(
    { length: idLength },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");

  function handleInputChange(event) {
    setPlaylistName(event.target.value);
  }

  function handleSave() {
    isSaving(true);
    const playlistData = {
      name: playlistName,
      songs: songsAdded,
      id: playlistId,
    };
    setPlaylistId(() => [playlistData.id, ...userPlaylistId]);
    addToPlaylist(() => [playlistData, ...userPlaylist]);
  }

  function addToSonglist(song) {
    addSong([{ song }, ...songsAdded]);
    isBuildingPlaylist(true);
  }

  function removeSong(song) {
    const updateList = songsAdded.filter(item => item.song !== song);
    addSong(updateList);
  }

  function clearList() {
    addSong([]);
  }

  return (
    <>
      <div className={styles.searchResult}>
        {songs.map((song, index) => (
          <Songs
            addNewSong={() => addToSonglist(song)}
            key={song.uri}
            name={song.name}
            artist={song.artist}
            album={song.album}
            artwork={song.artwork}
          />
        ))}
      </div>
      <div className={styles.formPlaylist}>
        <div className={styles.formPlaylistName}>
          <input
            type="text"
            placeholder="Name Your Playlist!"
            value={playlistName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formPlaylistBody}>
          {buildPlaylist &&
            songsAdded.map(({ song }, index) => (
              <SavedSongs
                key={index}
                name={song.name}
                artist={song.artist}
                album={song.album}
                artwork={song.artwork}
                remove = {() => removeSong(song)}
              />
            ))}
        </div>
        <div className={styles.formPlaylistBtns}>
          <button onClick={handleSave}>Save Playlist</button>
          <button onClick={clearList}>Clear Playlist</button>
          <button>Publish to Spotify</button>
        </div>
      </div>
    </>
  );
}
