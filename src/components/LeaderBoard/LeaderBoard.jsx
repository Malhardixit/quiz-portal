import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import React from 'react';
import SideBar from '../SideBar/SideBar';
import Navbar from '../newNavbar/Navbar';
import styles from './LeaderBoard.module.css';

const data = [
  {
    name: 'John',
    coins: 250,
    rank: '1',
  },
  {
    name: 'Alice',
    coins: 120,
    rank: '2',
  },
  {
    name: 'Bob',
    coins: 80,
    rank: '3',
  },
  {
    name: 'Eva',
    coins: 400,
    rank: '4',
  },
  {
    name: 'John',
    coins: 250,
    rank: '5',
  },
  {
    name: 'Alice',
    coins: 120,
    rank: '6',
  },
  {
    name: 'Bob',
    coins: 80,
    rank: '7',
  },
];

function LeaderBoard() {
  return (
    <div>
      <Navbar userName="Anish P" coins={300} />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div className={styles.LeaderBoardContainer}>
          <div className={styles.LeaderBoardHeaderWrapper}>
            <LeaderboardIcon
              sx={{ fontSize: '4rem', marginRight: '1.4rem', color: '#002B92' }}
            />
            <div>Leaderboard</div>
          </div>
          <div className={styles.LeaderBoardWrapper}>
            <div className={styles.LeaderBoardTopOfAll}>
              <div className={styles.LeaderBoardTitle}>
                Top performers of all time
              </div>
              <hr />
              <div className={styles.LeaderBoardTable}>
                <div className={styles.LeaderBoardInfo}>
                  <div style={{ flexBasis: '45%' }}>User</div>
                  <div>Coins</div>
                  <div>Rank</div>
                </div>
                {data.map((item) => (
                  <div
                    key={item.name}
                    className={
                      item.rank % 2
                        ? styles.LeaderBoardUsers
                        : styles.LeaderBoardDarkbg
                    }
                  >
                    <div style={{ flexBasis: '45%' }}>{item.name}</div>
                    <div>{item.coins}</div>
                    <div>{item.rank}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.LeaderBoardOf24Hrs}>
              <div className={styles.LeaderBoardTitle}>
                Top performers in last 24 hrs
              </div>
              <hr />
              <div className={styles.LeaderBoardTable}>
                <div className={styles.LeaderBoardInfo}>
                  <div style={{ flexBasis: '45%' }}>User</div>
                  <div>Coins</div>
                  <div>Rank</div>
                </div>
                {data.map((item) => (
                  <div
                    key={item.name}
                    className={
                      item.rank % 2
                        ? styles.LeaderBoardUsers
                        : styles.LeaderBoardDarkbg
                    }
                  >
                    <div style={{ flexBasis: '45%' }}>{item.name}</div>
                    <div>{item.coins}</div>
                    <div>{item.rank}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
