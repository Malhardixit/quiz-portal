import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import styles from './SideBar.module.css';

function SideBar() {
  const [activeRoute, setActiveRoute] = useState('Home');

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

  return (
    <div style={{ }}>
      <div className={styles.sideBarContainer}>
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
              })}`}
            >
              {route.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
