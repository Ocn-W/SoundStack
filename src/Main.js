import React from 'react';
import Welcome from './main-components/Welcome';
import styles from './css/mainpage.module.css';

function Main() {
  return (
    <>
      <div className={styles.main}>
        <Welcome />
      </div>
    </>
  );
}

export default Main;