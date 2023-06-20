import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon
  from '@mui/icons-material/PersonOutlineOutlined';
import PropTypes from 'prop-types';
import styles from './Topnav.module.css';
import coinImg from '../../assets/coins_img.svg';

function Topnav(props) {
  const [search, setSearch] = useState(' ');

  const { coins, userName } = props;

  return (
    <nav>
      <div className={styles.top}>
        <div className={styles.main_div}>
          <div className={styles.searchBar}>
            <TextField
              placeholder="Search"
              style={{ margin: 'auto', marginTop: '0.6rem' }}
              className={styles.text_field}
              label="Search"
              variant="outlined"
              value={search}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              onChange={(e) => { setSearch(e.target.value); }}
            />
          </div>
          <hr />
          <div className={styles.points_div}>
            <div className={styles.points_div_img}>
              <IconButton className={styles.images}>
                <a href="/">
                  <img
                    src={coinImg}
                    alt="points"
                    className={styles.coins_image}
                  />
                </a>
              </IconButton>
            </div>
            <div className={styles.points_div_content}>{coins}</div>
          </div>
          <hr />
          <div className={styles.notification_div}>
            <IconButton>
              <NotificationsIcon style={{ fontSize: '4rem' }} />
            </IconButton>
          </div>
          <hr />
          <div className={styles.profileContainer}>
            <IconButton>
              <PersonOutlineOutlinedIcon style={{ fontSize: '4.5rem' }} />
            </IconButton>
            <div className={styles.profile_div}>
              <div className={styles.profile_div_userName}>
                {userName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Topnav.propTypes = {
  coins: PropTypes.number,
  userName: PropTypes.string,
};

export default Topnav;
