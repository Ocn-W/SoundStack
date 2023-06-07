import React, { useContext } from 'react';
import Welcome from './Welcome';
import PlaylistPage from '../main-components/PlaylistPage';
import { PlaylistContext } from '../contexts/PlaylistContext';

export default function HomePage() {
  const {showPlaylist} = useContext(PlaylistContext);

  return (
    <> 
      {showPlaylist ? <PlaylistPage/> : <Welcome/>}
    </>
  )
}
