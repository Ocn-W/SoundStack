import React, { useContext } from 'react';
import styles from '../css/header.module.css';
import { SearchBarResult } from '../contexts/SearchBarContext';
import { PlaylistContext } from '../contexts/PlaylistContext';

export default function SearchBar() {
    const { setSearchInput } = useContext(SearchBarResult);
    const { searchInput } = useContext(SearchBarResult);
    const { accessToken } = useContext(SearchBarResult);
    const { setSongs } = useContext(SearchBarResult);
    const { songs } = useContext(SearchBarResult);
    const { isSearching } = useContext(SearchBarResult);
    const {isPlaylistSelected} = useContext(PlaylistContext);

    async function search() {
      console.log("Searching for string " + searchInput);
      const searchParams = {
        method: "GET",
        headers: {
          "Content-Type": "applications/json",
          Authorization: "Bearer " + accessToken
        },
      };

      const songList = await fetch(
        "https://api.spotify.com/v1/search?q=" + searchInput + "&type=track&limit=50",
        searchParams
      )
        .then((response) => response.json())
        .then((data) => {
          isPlaylistSelected(false);  
          isSearching(true);
          return setSongs(
            data.tracks.items.map((track) => ({
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              artwork: track.album.images[0].url,
              uri: track.uri,
        })))});

      console.log(
        "Searched artist " +
          searchInput +
          " Songs Visible " +
          JSON.stringify(songs)
      );
    }

    return (
      <div className={styles.searchbar}>
        <input
          type="search"
          placeholder="Search Spotify Library"
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <button onClick={search}>Search Spotify</button>
      </div>
    );
}

