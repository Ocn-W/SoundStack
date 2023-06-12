import {useContext} from 'react';
import styles from '../css/taskMenu.module.css';
import { PlaylistContext } from '../contexts/PlaylistContext';
import { SearchBarResult } from '../contexts/SearchBarContext';

export default function SavePlaylist({playlistName}) {
  const {isPlaylistSelected} = useContext(PlaylistContext);
  const {isSearching} = useContext(SearchBarResult);

  function handleClick(){
    isSearching(false);
    isPlaylistSelected(true);
    console.log('Selected Playlist: ' + playlistName);
  }

  return (
    <>
    <div className={styles.savePlaylist}>
        <button onClick={handleClick}>{playlistName}</button>
    </div>
    </>
  );
}
