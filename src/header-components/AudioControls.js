import React from "react";
import playBtn from "../images/PlayBtn.png";
import rewindBtn from "../images/RewindBtn.png";
import forwardBtn from "../images/ForwardBtn.png";
import styles from "../css/header.module.css";
import VolumeBtn from "../images/VolumeBtn.png";

export default function AudioControls() {
  return (
    <div className={styles.controls}>
      <div className={styles.audiobtns}>
        <button>
          <img src={rewindBtn} alt="Previous Song" />
        </button>
        <button>
          <img src={playBtn} alt="Play Song" />
        </button>
        <button>
          <img src={forwardBtn} alt="Next Song" />
        </button>
      </div>
      <div className={styles.volume}>
        <VolumeSlider />
      </div>
    </div>
  );
}

export function VolumeSlider() {
  return (
    <div>
      <img src={VolumeBtn} alt="Volume Control" />
      <input type="range" min="0" max="100" step="1" />
    </div>
  );
}
