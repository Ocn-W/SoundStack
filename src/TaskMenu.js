import styles from './css/taskMenu.module.css';
import Playlist from './taskmenu-components/Playlist';

export default function TaskMenu() {
  return (
    <div className={styles.taskmenu}>
      <div className={styles.library}>
        <p>LIBRARY</p>
      </div>
      <div>
        <Playlist />
      </div>
    </div>
  );
}

