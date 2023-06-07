import React from 'react';
import styles from '../css/taskMenu.module.css';


export default function CreatePlaylist({onCancel, onSave, playlistName, inputChange}) {
  return (
    <>
      <div className={styles.createPlaylist}>
        <p>Playlist Title</p>
        <input type="text" value={playlistName} onChange={inputChange}/>
        <div className={styles.createBtns}>
          <button onClick={onSave} aria-details='Save New Playlist'>Save</button>
          <button onClick={onCancel} aria-details='Cancel Playlist Creation'>Cancel</button>
        </div>
      </div>
    </>
  );
}   

