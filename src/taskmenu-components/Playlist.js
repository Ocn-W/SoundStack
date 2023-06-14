import React, { useContext } from "react";
import styles from "../css/taskMenu.module.css";
import SavePlaylist from "./SavePlaylist";
import { PlaylistContext, SonglistContext } from "../contexts/PlaylistContext";

export default function Playlist() {
    const {savePlaylist} = useContext(PlaylistContext);
    const {userPlaylist} = useContext(SonglistContext);

    return (
      <>
        <div className={styles.playlist}>
          <p>Playlists</p>
        </div>     
        {savePlaylist && userPlaylist.map(({playlistName},index) => <SavePlaylist playlistName={playlistName} key={index}/>)}
      </>
    );
}