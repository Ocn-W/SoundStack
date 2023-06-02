import { useState } from "react";
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
        isSaving(true);
        const newPlaylist = {playlistName};
        addToPlaylist([...userPlaylist, newPlaylist]);
        console.log('Save Successful! Playlist name is ' + playlistName);
        handleCancel();
    }
    
    function handleCancel() {
        isCreateVisible(false);
    }

    return (
      <>
        <div className={styles.playlist}>
          <p>Playlist</p>
          <button onClick={handleClick}>+</button>
        </div>     
        {showCreatePlaylist && <CreatePlaylist inputChange={handleInputChange}  onSave={handleSave} onCancel={handleCancel}/>}
        {savePlaylist && userPlaylist.map(({playlistName}, index) => <SavePlaylist playlistName={playlistName} key={index}/>)}
      </>
    );
}

//create empty array and store playlist objects
//playlist objects have name and empty array for songs
//add song button pushes song to the array inside playlist object
