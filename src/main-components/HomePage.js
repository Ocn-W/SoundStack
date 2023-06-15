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
  const { userPlaylist } = useContext(SonglistContext);
  const { userPlaylistId, selectedPlaylistId } = useContext(GeneratePlaylist);

  const selectedPlaylist = userPlaylist.find(
    (playlist) => playlist.id === selectedPlaylistId
  );

  return (
    <>
      {showPlaylist && selectedPlaylist ? (
        <PlaylistPage
          playlistName={selectedPlaylist.name}
          songList={selectedPlaylist.songs}
          key={selectedPlaylist.id}
        />
      ) : showSearchResult ? (
        <SearchResult />
      ) : (
        <Welcome />
      )}
    </>
  );
}
