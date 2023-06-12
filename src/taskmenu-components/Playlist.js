import React, { useContext, useState } from "react";
import styles from "../css/taskMenu.module.css";
import CreatePlaylist from "./CreatePlaylist";
import SavePlaylist from "./SavePlaylist";
import { ListNameContext } from "../contexts/PlaylistContext";

export default function Playlist() {
    const [showCreatePlaylist, isCreateVisible] = useState(false);
    const [savePlaylist, isSaving] = useState(false);
    const [userPlaylist, addToPlaylist] = useState([]);
    const {setPlaylistName} = useContext(ListNameContext);
    const {playlistName} = useContext(ListNameContext);
    

    function handleClick() {
      isCreateVisible(true);
    }

    function handleInputChange(event) {
      setPlaylistName(event.target.value);
    }

    function handleSave() {
      isSaving(true);
      addToPlaylist([{playlistName}, ...userPlaylist]);
      console.log('Save Sccessful! Playlist name is ' + playlistName);
      console.log(userPlaylist);
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