import React, { useState } from "react";
import styles from "../css/taskMenu.module.css";
import CreatePlaylist from "./CreatePlaylist";
import SavePlaylist from "./SavePlaylist";

export default function Playlist() {
    const [showCreatePlaylist, isCreateVisible] = useState(false);
    const [savePlaylist, isSaving] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [userPlaylist, addToPlaylist] = useState([]);
    

    function handleClick() {
        isCreateVisible(true);
    }

    function handleInputChange(event) {
        setPlaylistName(event.target.value);
    }

    function handleSave() {
        const newPlaylist = {playlistName};
        isSaving(true);
        addToPlaylist([newPlaylist, ...userPlaylist]);
        console.log('Save Sccessful! Playlist name is ' + playlistName);
        handleCancel();
    }
    
    function handleCancel() {
        isCreateVisible(false);
    }

    return (
      <>
        <div className={styles.playlist}>
          <p>Playlist</p>
          <button onClick={handleClick} aria-details="Add New Playlist">+</button>
        </div>     
        {showCreatePlaylist && <CreatePlaylist inputChange={handleInputChange}  onSave={handleSave} onCancel={handleCancel}/>}
        {savePlaylist && userPlaylist.map(({playlistName},index) => <SavePlaylist playlistName={playlistName} key={index}/>)}
      </>
    );
}