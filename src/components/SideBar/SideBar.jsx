import React from 'react';

import styles from './SideBar.module.css';

function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarHeader}>MyGOV | Quiz</div>
    </div>
  );
}

export default SideBar;
