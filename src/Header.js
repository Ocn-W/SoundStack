import SearchBar from "./header-components/SearchBar";
import AudioControls from "./header-components/AudioControls";
import styles from "./css/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <SearchBar />
      </div>
      <div className={styles.logo}>
        <h1>SOUNDSTACK</h1>
      </div>
      <div>
        <AudioControls />
      </div>
    </div>
  );
}
