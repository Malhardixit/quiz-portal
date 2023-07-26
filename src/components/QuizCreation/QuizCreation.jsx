import React, { useCallback, useState } from 'react';
import { quizCreationApi } from '../../utils/quizCreationApi/quizCreationApi';
import styles from './QuizCreation.module.css';
import QuizQuestionCreation from './QuizQuestionCreation';

function QuizCreation() {
  const [inputState, setInputState] = useState({
    questionOptions: [
      {
        optionId: 'fid',
        optionDesc: '',
      },
    ],
    questionText: '',
    quizId: 'fid',
    questionId: '1',
  });

  const handleAddInputField = useCallback(() => {
    setInputState((prevState) => {
      const updatedOptions = [
        ...prevState.questionOptions,
        { optionDesc: '', optionId: 'fid' },
      ];
      return { ...prevState, questionOptions: updatedOptions };
    });
  }, []);

  const handleInputChange = useCallback((index, e) => {
    setInputState((prevState) => {
      const updatedOptions = [...prevState.questionOptions];
      updatedOptions[index] = { optionDesc: e.target.value, optionId: 'fid' };
      return { ...prevState, questionOptions: updatedOptions };
    });
  }, []);

  const handleQuestionChange = useCallback((e) => {
    setInputState((prevState) => ({
      ...prevState,
      questionText: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    quizCreationApi('fid2', inputState);
  }, [inputState]);

  return (
    <div className={styles.creationContainer}>
      <div className={styles.quizCreation_main}>
        <div className={styles.enterQuestion}>
          <span className={styles.enterQuestionsHeader}>Enter Question</span>
          <textarea
            type="text"
            required
            className={styles.questions_input}
            onChange={(e) => handleQuestionChange(e)}
            value={inputState.questionText}
          />
        </div>
        <div className={styles.optionsContainer}>
          <p>Add Options</p>
          <QuizQuestionCreation
            inputFields={inputState.questionOptions}
            handleInputChange={handleInputChange}
            handleAddInputField={handleAddInputField}
          />
        </div>
        <div className={styles.imageContaier}>
          <p>Add Image</p>
          <input type="file" accept="image/*" id="img" />
        </div>
        <div className={styles.submitContainer}>
          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.submitContainer_button}
          >
            Upload Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCreation;
