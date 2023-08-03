import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Navbar from '../newNavbar/Navbar';
import Styles from './QuizQuestions.module.css';

function QuizQuestions() {
  const { state } = useLocation();
  const [selectedOptions, setSelectedOptions] = useState('');
  const quizTitle = 'Astronomy and space Quiz';
  return (
    <div>
      <Navbar userName="Anish P" coins={300} />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div style={{ marginLeft: '20rem', flexBasis: '95%', margin: 'auto' }}>
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
            {state.questionSets.map((questionNumber, index) => (
              <div
                key={index}
                className={Styles.QuizQuestionsBody}
              >
                <div className={Styles.QuizQuestionsBodyInnerDiv}>
                  <div className={Styles.QuizQuestionsBodyInnerDivTitle}>
                    <span className={Styles.QuizQuestionsNumber}>
                      {questionNumber.questionId}
                    </span>
                    <span className={Styles.QuizOptionsTitle}>
                      {questionNumber.questionText}
                    </span>

                    {/* 3D view of the quiz */}

                    <div className={Styles.QuizOptionsWrapper}>
                      {questionNumber.questionOptions.map((item, i) => (
                        <button
                          key={item.optionId}
                          onClick={() => setSelectedOptions({
                            ...selectedOptions,
                            [questionNumber.questionId]: item.optionId,
                          })}
                          type="button"
                          className={
                            selectedOptions[questionNumber.questionId]
                            === item.optionId
                              ? Styles.QuizOptionsSelected
                              : Styles.QuizOptions
                          }
                        >
                          <span>{i + 1}</span>
                          <span className={Styles.QuizOptionsList}>
                            {item.optionDesc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestions;
