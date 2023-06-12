import React, { useContext } from 'react';
import Welcome from './Welcome';
import PlaylistPage from '../main-components/PlaylistPage';
import SearchResult from '../main-components/SearchResult';
import { PlaylistContext } from '../contexts/PlaylistContext';
import { SearchBarResult } from '../contexts/SearchBarContext';

export default function HomePage() {
  const {showPlaylist} = useContext(PlaylistContext);
  const {showSearchResult} = useContext(SearchBarResult);

  return (
    <> 
      {showPlaylist ? <PlaylistPage/> : <Welcome/>}
      {showSearchResult && <SearchResult/>}
    </>
  )
}
