import { useState, useEffect } from "react";
import styles from "../css/taskMenu.module.css";

export default function Playlist() {
    const [showCreatePlaylist, isCreateVisible] = useState(false);
    const [savePlaylist, setPlaylistName] = useState('')

    function handleClick() {
        isCreateVisible(true);
    }

    function handleSave(event) {
        setPlaylistName(event.target.value);
    }

    useEffect(() => {
        window.localStorage.setItem('PLAYLIST_NAME', JSON.stringify(savePlaylist));
    }, [savePlaylist])

    useEffect(() => {
        const data = window.localStorage.getItem('PLAYLIST_NAME');
        {data !== null && setPlaylistName(JSON.parse(data))}
    })

    return (
      <>
        <div className={styles.playlist}>
          <p>Playlist</p>
          <button onClick={handleClick}>+</button>
        </div>
        {showCreatePlaylist && (
            <div className={styles.createPlaylist}>
                <p>Playlist Title</p>
                <input type='text'/>
                <button onClick={handleSave}>Save</button>
                <button onClick={() => isCreateVisible(false)}>Cancel</button>
            </div>
            
        )}
      </>
    );
}

//create empty array and store playlist objects
//playlist objects have name and empty array for songs
//add song button pushes song to the array inside playlist object
