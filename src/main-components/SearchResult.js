import React, {useState} from 'react';
import styles from '../css/mainpage.module.css';
import Songs from './Songs';
import FormPlaylist from './FormPlaylist';

export default function SongList() {
  const [songsAdded, addSong] = useState([]);

  function addNewSong() {
    console.log('Song saved, forming playlist with current songs: ' + songsAdded);
  }

  return (
    <>
    <div className={styles.searchResult}>  
      <Songs addSong={addNewSong}/>
    </div>
    <div className={styles.formPlaylist}>
      <FormPlaylist />
    </div>
    </>
  )
}
