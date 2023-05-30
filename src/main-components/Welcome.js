import styles from '../css/mainpage.module.css';

export default function Welcome() {
  return (
    <div  className={styles.welcome}>
        <h2>WELCOME TO SOUNDSTACK</h2>
        <h3>Create custom playlists for your Spotify Account!</h3>
    </div>
  );
}
