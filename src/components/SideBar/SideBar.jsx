import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/Images/Vector.svg';
import img2 from '../../assets/Images/img2.svg';
import img4 from '../../assets/Images/img4.svg';
import home from '../../assets/Images/Home.svg';
import styles from './SideBar.module.css';
import img1Black from '../../assets/Images/icon1_black.svg';
import img2Black from '../../assets/Images/icon2_black.svg';
import img3Black from '../../assets/Images/icon3_black.svg';
import img4Black from '../../assets/Images/icon4_black.svg';

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
      iconBlack: img1Black,
      navigateTo: '/',
    },
    {
      name: 'My Certificates',
      isEnabled: true,
      isActive: activeRoute === 'My Certificates',
      icon: img1,
      iconBlack: img2Black,
    },
    {
      name: 'Change Language',
      isEnabled: true,
      isActive: activeRoute === 'Change Language',
      icon: img2,
      iconBlack: img3Black,
    },
    {
      name: 'Profile',
      isEnabled: true,
      isActive: activeRoute === 'Profile',
      icon: img4,
      iconBlack: img4Black,
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
      iconBlack: img4Black,
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
            {route.name === activeRoute ? (
              <img src={route.iconBlack} alt="icon" />
            ) : (
              <img src={route.icon} alt="icon" />
            )}
          </div>
          <div className={styles.sidebarRouteName}>{route.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
