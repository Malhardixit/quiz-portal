import React, { useCallback, useState } from 'react';
import { quizCreationApi } from '../../utils/quizCreationApi/quizCreationApi';
import styles from './QuizCreation.module.css';
import QuizQuestionCreation from './QuizQuestionCreation';

const optionsData = [
  {
    category: 'Animal',
    options: [
      {
        name: 'Dog',
      },
      {
        name: 'Cat',
      },
      {
        name: 'Mouse',
      },
    ],
  },
  {
    category: 'Planets',
    options: [
      {
        name: 'Mars',
      },
      {
        name: 'Jupiter',
      },
      {
        name: 'Saturn',
      },
    ],
  },
  {
    category: 'Monuments',
    options: [
      {
        name: 'Kutub Minar',
      },
      {
        name: 'Eiffel Tower',
      },
      {
        name: 'Taj Mahal',
      },
    ],
  },
];

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

  const [options, setOptions] = useState({
    category: '',
    subCategory: '',
  });

  const { category } = options;
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
      <div className={styles.quizCreationHeaderDiv}>
        <div className={styles.quizCreationHeader}>Quiz Creation</div>
      </div>
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
          <QuizQuestionCreation
            inputFields={inputState.questionOptions}
            handleInputChange={handleInputChange}
            handleAddInputField={handleAddInputField}
          />
        </div>
        <div className={styles.optionTitle}>
          {`${'Select from below option to choose '}`}
          <span style={{ fontWeight: 'bold' }}>3D model</span>
        </div>
        <div className={styles.radioBtnContainer}>
          {optionsData.map((item) => (
            <div key={item.category} className={styles.radioBtnContainerLabel}>
              <input
                onChange={(e) => setOptions({
                  ...options,
                  category: e.target.value,
                  subCategory: '',
                })}
                type="radio"
                value={item.category}
                name="catRadioBtn"
                className={styles.radioBtnContainerInput}
              />
              <div className={styles.categoryText}>{item.category}</div>
            </div>
          ))}
        </div>
        {category && (
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '2rem' }}>Select from the dropdown:</p>
            <select
              className={styles.dropDownOptions}
              onChange={
                (e) => setOptions({ ...options, subCategory: e.target.value })
              }
            >
              <option value="">Please select an option</option>
              {optionsData.map((item) => {
                if (item.category === category) {
                  return item.options.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
          </div>
        )}

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
