import styles from './Navbar.module.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon
  from '@mui/icons-material/PersonOutlineOutlined';
import coinImg from '../../assets/coins_img.svg';
import InputAdornment from '@mui/material/InputAdornment';

function Navbar({ userName, coins }) {
  const [search, setSearch] = useState('');

  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.navBarHeader}>
        <a href="/">MyGOV | Quiz</a>
      </div>
      <div className={styles.navBarSearch}>
        <TextField
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder="Search"
          className={styles.navBarInputField}
          type="text"
          style={{ fontSize: '25px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon style={{ fontSize: '2rem' }} />
                </IconButton>
              </InputAdornment>
            ),
            style: { width: '100%', fontSize: '1.8rem' },
          }}
        />
      </div>
      <ul className={styles.navBarItemsList}>
        <hr />
        <li>
          <a style={{ display: 'flex' }} href="/coins">
            <img
              className={styles.navbarCoinImg}
              src={coinImg}
              alt="coin-img"
            />
            <div className={styles.navbarCoins}>
              {coins}
            </div>
          </a>
        </li>
        <hr />
        <li>
          <a href="/notifications">
            <IconButton>
              <NotificationsIcon style={{ fontSize: '4.5rem' }} />
            </IconButton>
          </a>
        </li>
        <hr />
        <li>
          <a href="/profile">
            {userName}
            <IconButton>
              <PersonOutlineOutlinedIcon style={{ fontSize: '4.5rem' }} />
            </IconButton>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
