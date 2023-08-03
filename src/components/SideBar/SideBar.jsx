import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/Images/Vector.svg';
import img2 from '../../assets/Images/img2.svg';
import img4 from '../../assets/Images/img4.svg';
import home from '../../assets/Images/Home.svg';
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
      icon: home,
    },
    {
      name: 'My Certificates',
      isEnabled: true,
      isActive: activeRoute === 'My Certificates',
      icon: img1,
    },
    {
      name: 'Change Language',
      isEnabled: true,
      isActive: activeRoute === 'Change Language',
      icon: img2,
    },
    {
      name: 'Profile',
      isEnabled: true,
      isActive: activeRoute === 'Profile',
      icon: img4,
    },
    {
      name: 'Logout',
      isEnabled: false,
      isActive: false,
      icon: img4,
    },
    {
      name: 'QuizCreation',
      isEnabled: true,
      isActive: activeRoute === 'QuizCreation',
      navigateTo: '/quizCreation',
      icon: img4,
    },
  ].filter((route) => route.isEnabled);

  const handleRoutes = useCallback(
    (route) => {
      setActiveRoute(route);
      navigate(Routes.find((r) => r.name === route).navigateTo);
    },
    [setActiveRoute, navigate, Routes],
  );

  return (
    <div className={styles.sideBarContainer}>
      {Routes.map((route) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => handleRoutes(route.name)}
          key={route.name}
          onClick={() => handleRoutes(route.name)}
          className={`${classNames(styles.sideBarContents, {
            [styles.sideBarContentsActive]: route.isActive,
          })}`}
        >
          <div
            className={`${classNames(styles.sidebarIcon, {
              [styles.sidebarIconActive]: route.isActive,
            })}`}
          >
            <img src={route.icon} alt="icon" />
          </div>
          <div className={styles.sidebarRouteName}>{route.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
