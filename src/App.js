import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import { CLIENT_ID, CLIENT_SECRET } from "./Spotify";
import { SearchBarResult } from "./contexts/SearchBarContext";
import {
  GeneratePlaylist,
  PlaylistContext,
  SonglistContext,
} from "./contexts/PlaylistContext";
import { ListNameContext } from "./contexts/PlaylistContext";
import "./css/app.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [songs, setSongs] = useState([]);
  const [showSearchResult, isSearching] = useState(false);
  const [showPlaylist, isPlaylistSelected] = useState(false);
  const [selectedPlaylistId, setSelectedId] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [savePlaylist, isSaving] = useState(false);
  const [userPlaylistId, setPlaylistId] = useState([]);
  const [userPlaylist, addToPlaylist] = useState([]);
  const [buildPlaylist, isBuildingPlaylist] = useState(false);
  const [songsAdded, addSong] = useState([]);

  //LOCAL STORAGE TIME
  //i need to save the playlist list with picked songs in local storage
  //and grab that to update the saved playlist page

  useEffect(() => {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  return (
    <>
      <SearchBarResult.Provider
        value={{
          searchInput,
          setSearchInput,
          accessToken,
          songs,
          setSongs,
          showSearchResult,
          isSearching,
          songsAdded,
          addSong,
        }}
      >
        <PlaylistContext.Provider
          value={{
            showPlaylist,
            isPlaylistSelected,
            savePlaylist,
            isSaving,
            buildPlaylist,
            isBuildingPlaylist,
          }}
        >
          <ListNameContext.Provider
            value={{
              playlistName,
              setPlaylistName,
            }}
          >
            <header>
              <Header />
            </header>
            <SonglistContext.Provider
              value={{
                userPlaylist,
                addToPlaylist,
              }}
            >
              <GeneratePlaylist.Provider
                value={{
                  userPlaylistId,
                  setPlaylistId,
                  selectedPlaylistId,
                  setSelectedId,
                }}
              >
                <main>
                  <Main />
                </main>
              </GeneratePlaylist.Provider>
            </SonglistContext.Provider>
          </ListNameContext.Provider>
        </PlaylistContext.Provider>
      </SearchBarResult.Provider>
    </>
  );
}

export default App;
