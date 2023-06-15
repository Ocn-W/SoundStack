import { useContext } from "react";
import styles from "../css/taskMenu.module.css";
import { GeneratePlaylist, PlaylistContext } from "../contexts/PlaylistContext";
import { SearchBarResult } from "../contexts/SearchBarContext";

export default function SavePlaylist({ playlistName, playlistId }) {
  const { isPlaylistSelected } = useContext(PlaylistContext);
  const { isSearching } = useContext(SearchBarResult);
  const { setSelectedId } = useContext(GeneratePlaylist);

  function handleClick() {
    isSearching(false);
    isPlaylistSelected(true);
    setSelectedId(playlistId);
  }

  return (
    <>
      <div className={styles.savePlaylist} key={playlistId}>
        <button onClick={handleClick}>{playlistName}</button>
      </div>
    </>
  );
}
