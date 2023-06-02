import styles from '../css/taskMenu.module.css'

export default function SavePlaylist({playlistName}) {
  return (
    <div className={styles.savePlaylist}>
        <p>{playlistName}</p>
    </div>
  );
}
