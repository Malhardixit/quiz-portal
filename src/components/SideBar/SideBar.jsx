import React, { useState, useCallback } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import styles from './SideBar.module.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SideBar(props) {
  const [activeRoute, setActiveRoute] = useState('Home');

  const [openSideBar, setOpenSideBar] = useState(true);

  // TODO: Add in Routes Folder
  // TODO: Add Routing
  const Routes = [
    {
      name: 'Home',
      isEnabled: true,
      isActive: activeRoute === 'Home',
    },
    {
      name: 'My Certificates',
      isEnabled: true,
      isActive: activeRoute === 'My Certificates',
    },
    {
      name: 'Change Language',
      isEnabled: true,
      isActive: activeRoute === 'Change Language',
    },
    {
      name: 'Profile',
      isEnabled: true,
      isActive: activeRoute === 'Profile',
    },
    {
      name: 'Logout',
      isEnabled: false,
      isActive: false,
    },
  ].filter((route) => route.isEnabled);

  const handleRoutes = useCallback((route) => {
    setActiveRoute(route);
  }, [setActiveRoute]);

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <IconButton onClick={handleOpenSideBar}>
        <MenuIcon style={{ fontSize: '3rem' }} />
      </IconButton>

      {openSideBar && (
        <div className={styles.sideBarContainer}>
          <div className={styles.sideBarContainerCloseWrapper}>
            <div className={styles.sideBarHeader}>MyGOV | Quiz</div>
            <IconButton onClick={handleOpenSideBar}>
              <CloseIcon style={{ fontSize: '3rem', color: 'white' }} />
            </IconButton>
          </div>
          <div className={styles.sideBarContentsWrapper}>
            {Routes.map((route) => (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={() => handleRoutes(route.name)}
                key={route}
                onClick={() => handleRoutes(route.name)}
                className={`${classNames(styles.sideBarContents, {
                  [styles.sideBarContentsActive]: route.isActive,
                })} ${styles.sideBar_div} `}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>
      )}

    </>
  );
}

export default SideBar;
