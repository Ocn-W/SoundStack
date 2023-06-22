import React, { useContext } from "react";
import styles from "../css/header.module.css";
import { SearchBarResult } from "../contexts/SearchBarContext";
import { PlaylistContext } from "../contexts/PlaylistContext";

export default function SearchBar() {
  const { setSearchInput, searchInput, accessToken, setSongs, isSearching } = useContext(SearchBarResult);
  const { isPlaylistSelected } = useContext(PlaylistContext);

//Takes the searchInput value and gets a list of songs from Spotify
  async function search() {
    console.log("Searching for string " + searchInput);
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
        Authorization: "Bearer " + accessToken,
      },
    };
//Shows 50 tracks based starting with most popular suggestion
    const songList = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchInput +
        "&type=track&limit=50",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        isPlaylistSelected(false);
        isSearching(true);
//Once the data is recieved set the songs array with the data retrieved
//and store them under relevant attributes
        return setSongs(
          data.tracks.items.map((track) => ({
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            artwork: track.album.images[0].url,
            uri: track.uri,
          }))
        );
      });
  }

  function handleKeyPress(event){
    event.key === 'Enter' && search(searchInput)
  }

  return (
    <div className={styles.searchbar}>
      <input
        type="search"
        placeholder="Search Spotify Library"
        onChange={(event) => {setSearchInput(event.target.value)}}
        onKeyDown={handleKeyPress}
      />
      <button onClick={search}>Search Spotify</button>
    </div>
  );
}
