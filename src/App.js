import React, {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import { CLIENT_ID, CLIENT_SECRET } from './Spotify';
import { SearchBarResult } from './contexts/SearchBarContext';
import {PlaylistContext} from './contexts/PlaylistContext';
import { ListNameContext } from './contexts/PlaylistContext';
import './css/app.css';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [songs, setSongs] = useState([]);
  const [showSearchResult, isSearching] = useState(false);
  const [showPlaylist, isPlaylistSelected] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
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
        }}>
        <PlaylistContext.Provider value={{ showPlaylist, isPlaylistSelected }}>
          <ListNameContext.Provider value={{ playlistName, setPlaylistName }}>
            <header>
              <Header />
            </header>
            <main>
              <Main />
            </main>
          </ListNameContext.Provider>
        </PlaylistContext.Provider>
      </SearchBarResult.Provider>
    </>
  );
}

export default App;