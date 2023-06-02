import styles from '../css/taskMenu.module.css';


export default function CreatePlaylist({onCancel, onSave, playlistName, inputChange}) {
  return (
    <>
      <div className={styles.createPlaylist}>
        <p>Playlist Title</p>
        <input type="text" value={playlistName} onChange={inputChange}/>
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  );
}   

