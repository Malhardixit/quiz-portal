import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import styles from './QuizInfoCard.module.css';
import { useNavigate } from 'react-router-dom';

function QuizInfoCard(props) {
  const navigate = useNavigate();
  const {
    image, title, tags, question, time,
  } = props;
  return (
    <div className={styles.main_div}>
      <div
        className={styles.card_div}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.card_div_content}>
          <div className={styles.card_div_heading}>
            <p className={styles.card_div_p}>
              {title}
            </p>
          </div>
          <div className={styles.card_div_time}>
            <div className={styles.question}>
              <span className={styles.quesions_title}>{question}</span>
              <p className={styles.questions_div_subtitle}>Questions</p>
            </div>
            <div className={styles.time}>
              <span className={styles.quesions_title}>{time}</span>
              <p className={styles.questions_div_subtitle}>Minutes</p>
            </div>
          </div>
          <div className={styles.tag_div}>
            {tags.map((item, index) => (
              <div key={index} className={styles.tags}>
                {item}
              </div>
            )) }
          </div>
          <div className={styles.play_button_div}>
            <IconButton>
              <PlayArrowRoundedIcon
                className={styles.play_icon}
                style={{ color: 'white', fontSize: '70px' }}
                onClick={() => navigate('/viewquestions')}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

QuizInfoCard.propTypes = {
  title: PropTypes.string,
  question: PropTypes.number,
  time: PropTypes.number,
  tags: PropTypes.array,
  image: PropTypes.string,
};

export default QuizInfoCard;
