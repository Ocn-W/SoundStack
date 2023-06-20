import React from "react";
import styles from "../css/mainpage.module.css";

export default function Welcome({login}) {
  return (
    <div className={styles.welcome}>
      <h2>WELCOME TO SOUNDSTACK</h2>
      <h3>Start Searching to Create Your Playlist!</h3>
      <button onClick={login}>Log In to Spotify</button>
    </div>
  );
}
