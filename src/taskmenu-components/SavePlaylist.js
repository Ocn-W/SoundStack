import {useContext} from 'react';
import styles from '../css/taskMenu.module.css';
import { PlaylistContext } from '../contexts/PlaylistContext';
 
export default function SavePlaylist({playlistName}) {
  const {isPlaylistSelected} = useContext(PlaylistContext);

  return (
    <>
    <div className={styles.savePlaylist}>
        <button onClick={isPlaylistSelected}>{playlistName}</button>
    </div>
    </>
  );
}
