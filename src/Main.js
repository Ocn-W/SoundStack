import styles from "./css/mainpage.module.css";
import styles2 from "./css/taskMenu.module.css";
import HomePage from "./main-components/HomePage";
import Playlist from "./taskmenu-components/Playlist";

export default function Main({userLogin}) {
  return (
    <>
      <div className={styles2.taskmenu}>
        <div className={styles2.library}>
          <p>LIBRARY</p>
        </div>
        <div>
          <Playlist />
        </div>
      </div>
      <div className={styles.main}>
        <HomePage userLogin={userLogin}/>
      </div>
    </>
  );
}
