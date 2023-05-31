import playBtn from '../images/PlayBtn.png';
import rewindBtn from '../images/RewindBtn.png';
import forwardBtn from '../images/ForwardBtn.png';
import styles from '../css/header.module.css';
import VolumeBtn from '../images/VolumeBtn.png';

export default function AudioControls() {
  return (
    <div className={styles.controls}>
      <div className={styles.audiobtns}>
        <button>
          <img src={rewindBtn} />
        </button>
        <button>
          <img src={playBtn} />
        </button>
        <button>
          <img src={forwardBtn} />
        </button>
      </div>
      <div  className={styles.volume}>
        <VolumeSlider/>
      </div>
    </div>
  );
}

export function VolumeSlider() {
  return (
    <div>
        <img src={VolumeBtn}/>
        <input type="range" min="0" max="100" step="1"/>
    </div>
  );
}
