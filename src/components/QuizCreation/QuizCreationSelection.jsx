import React, { useState } from 'react';
import QuizCreationManual from './QuizCreation';
import styles from './QuizCreation.module.css';
import QuizCreationAi from './QuizCreationAI';

function QuizCreationSelection() {
  const [quiztype, setQuizType] = useState('Manual');
  return (
    <div>
      <div className={styles.quizCreationHeader}>
        <button
          type="button"
          onClick={() => {
            setQuizType('Manual');
          }}
          className={`${quiztype === 'Manual' ? 'activeElement' : ''} ${
            styles.quizCreationHeader_manual
          }`}
        >
          Manual quiz creation
        </button>
        <button
          onClick={() => {
            setQuizType('AI');
          }}
          type="button"
          className={`${quiztype === 'AI' ? 'activeElement' : ''} ${
            styles.quizCreationHeader_AI
          }`}
        >
          AI generated quiz creation
        </button>
      </div>
      <div className={styles.quizCreationUnderline} />
      {quiztype === 'Manual' ? <QuizCreationManual /> : <QuizCreationAi />}
    </div>
  );
}

export default QuizCreationSelection;
