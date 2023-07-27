import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SideBar.module.css';

function SideBar() {
  const [activeRoute, setActiveRoute] = useState('Home');
  const navigate = useNavigate();
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

  const handleRoutes = useCallback(
    (route) => {
      setActiveRoute(route);
      navigate('/');
    },
    [setActiveRoute, navigate],
  );

  return (
    <div className={styles.sideBarContainer}>
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
  );
}

export default SideBar;
