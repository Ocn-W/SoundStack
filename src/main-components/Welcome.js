import React from "react";
import styles from "../css/mainpage.module.css";

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <h2>WELCOME TO SOUNDSTACK</h2>
      <h3>Start Searching to Create Your Playlist!</h3>
      <button>Log In to Spotify</button>
    </div>
  );
}
