import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import Styles from './QuizQuestions.module.css';

function QuizQuestions() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectedOption = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };
  const quizTitle = 'Astronomy and space Quiz';
  const options = [
    {
      id: 1,
      option: 'Sputnik',
    },
    {
      id: 2,
      option: 'Ariel',
    },
    {
      id: 3,
      option: 'GSAT-10',
    },
    {
      id: 4,
      option: 'Aryabhatta',
    },
  ];

  const getAlphabetLetter = (id) => String.fromCharCode(65 + id);
  return (
    <div>
      <div className={Styles.QuizQuestionsWrapper}>
        <div className={Styles.QuizQuestionsTitleDiv}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={Styles.QuizQuestionsTitle}>{quizTitle}</div>
            <IconButton>
              <InfoOutlinedIcon sx={{ fontSize: '3rem', color: 'white' }} />
            </IconButton>
          </div>
          <div className={Styles.QuizQuestionsSubtitle}>
            <div className={Styles.QuizQuestionsSubtitleInnerDiv}>
              <span style={{ margin: 'auto', fontWeight: '600' }}>15</span>
              <span>Questions</span>
            </div>
            <div className={Styles.QuizQuestionsSubtitleInnerDiv}>
              <span style={{ margin: 'auto', fontWeight: '600' }}>30</span>
              <span>Minutes</span>
            </div>
          </div>
        </div>

        {/* Quiz Questions Body */}
        <div className={Styles.QuizQuestionsBody}>
          <div className={Styles.QuizQuestionsBodyInnerDiv}>
            <div className={Styles.QuizQuestionsBodyInnerDivTitle}>
              <span className={Styles.QuizQuestionsNumber}>1</span>
              <span className={Styles.QuizOptionsTitle}>
                What is the name of the first satellite sent into space ?
              </span>

              {/* 3D view of the quiz */}

              <div className={Styles.QuizQuestion3DView}>3D View</div>

              <div className={Styles.QuizOptionsWrapper}>
                {options.map((item) => (
                  <button
                    onClick={() => handleSelectedOption(item.id)}
                    type="button"
                    // className={Styles.QuizOptions}
                    className={
                      selectedOption === item.id
                        ? Styles.QuizOptionsSelected
                        : Styles.QuizOptions
                    }
                  >
                    <span>{getAlphabetLetter(item.id - 1)}</span>
                    <span className={Styles.QuizOptionsList}>
                      {item.option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestions;
