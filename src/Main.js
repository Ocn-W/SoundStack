import styles from './css/mainpage.module.css';
import styles2 from './css/taskMenu.module.css';
import HomePage from './main-components/HomePage';
import Playlist from './taskmenu-components/Playlist';
import {PlaylistContext} from './contexts/PlaylistContext';
import { useState } from 'react';

export default function Main() {
  const [showPlaylist, isPlaylistSelected] = useState(false);

  return (
    <>
    <PlaylistContext.Provider value={{showPlaylist, isPlaylistSelected}}>
      <div className={styles2.taskmenu}>
        <div className={styles2.library}>
          <p>LIBRARY</p>
        </div>
        <div>
          <Playlist />
        </div>
      </div>
      <div className={styles.main}>
        <HomePage />
      </div>
      </PlaylistContext.Provider>
    </>
  );
}