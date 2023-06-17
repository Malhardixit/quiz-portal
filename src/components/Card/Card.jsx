import styles from './Card.module.css'
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Card(props) {
  return (
    <>
        <div className={styles.main_div}>
            <div className={styles.card_div}
            style={{backgroundImage:`url(${props.image})`}}
            >
                <div className={styles.card_div_content}>
                <div className={styles.card_div_heading}>
                    <p className={styles.card_div_p}>
                        {props.title}
                    </p>
                </div>
                <div className={styles.card_div_time}>
                    <div className={styles.question}>
                        <span className={styles.quesions_title}>{props.question}</span>
                        <p className={styles.questions_div_subtitle}>Questions</p>
                    </div>
                    <div className={styles.time}>
                        <span className={styles.quesions_title}>{props.time}</span>
                        <p className={styles.questions_div_subtitle}>Minutes</p>
                    </div>
                </div>
                
                <div className={styles.tag_div}>
                    {
                        props.tags.map((item, index) => {
                            return(
                                <>
                                    <div 
                                    key={index}
                                    className={styles.tags}
                                    >
                                        {
                                            item
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className={styles.play_button_div}>
                    <IconButton>
                        <PlayCircleIcon
                        className={styles.play_icon}
                        style={{color:"white",fontSize:"70px"}}
                        />
                    </IconButton>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    question: PropTypes.number,
    time: PropTypes.number,
    tags: PropTypes.array,
    image: PropTypes.string
}

export default Card