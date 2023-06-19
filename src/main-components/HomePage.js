import React, { useContext } from "react";
import Welcome from "./Welcome";
import PlaylistPage from "../main-components/PlaylistPage";
import SearchResult from "./SearchPage";
import {
  GeneratePlaylist,
  PlaylistContext,
  SonglistContext,
} from "../contexts/PlaylistContext";
import { SearchBarResult } from "../contexts/SearchBarContext";

export default function HomePage() {
  const { showPlaylist } = useContext(PlaylistContext);
  const { showSearchResult } = useContext(SearchBarResult);
  const { userPlaylist, addToPlaylist } = useContext(SonglistContext);
  const { selectedPlaylistId } = useContext(GeneratePlaylist);

  const selectedPlaylist = userPlaylist.find(
    (playlist) => playlist.id === selectedPlaylistId
  );

  function deletePlaylist() {
    const updatedUserPlaylist = userPlaylist.filter(item => item.id !== selectedPlaylist.id);
    addToPlaylist(updatedUserPlaylist);
  }

  return (
    <>
      {showPlaylist && selectedPlaylist ? (
        <PlaylistPage
          playlistName={selectedPlaylist.name}
          songList={selectedPlaylist.songs}
          deletePlaylist ={deletePlaylist}
          key={selectedPlaylist.id}
          id={selectedPlaylist.id}
        />
      ) : showSearchResult ? (
        <SearchResult />
      ) : (
        <Welcome />
      )}
    </>
  );
}
