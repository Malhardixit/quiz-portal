import React, { useCallback, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { quizCreationApi } from '../../utils/quizCreationApi/quizCreationApi';
import SideBar from '../SideBar/SideBar';
import Navbar from '../newNavbar/Navbar';
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
      {
        name: 'Earth',
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
const originalInputState = {
  questionOptions: [
    {
      optionId: '',
      optionDesc: '',
    },
  ],
  questionText: '',
  quizId: 'quizforgov',
  questionId: '2',
};
function QuizCreation() {
  const [inputState, setInputState] = useState({
    questionOptions: [
      {
        optionId: '',
        optionDesc: '',
      },
    ],
    questionText: '',
    quizId: 'quizforgov',
    questionId: '2',
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
        { optionDesc: '', optionId: '' },
      ];
      return { ...prevState, questionOptions: updatedOptions };
    });
  }, []);

  const handleInputChange = useCallback((index, e) => {
    setInputState((prevState) => {
      const updatedOptions = [...prevState.questionOptions];
      updatedOptions[index] = {
        optionDesc: e.target.value,
        optionId: index + 1,
      };
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
    // eslint-disable-next-line no-unused-expressions
    quizCreationApi('quizforgov', inputState)
      .then((res) => {
        if (res.Message === 'Quiz: quizforgov updated, question added') {
          toast.success('Question uploaded successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setInputState(originalInputState);
          setOptions({
            ...options,
            category: '',
            subCategory: '',
          });
        }
      })
      .catch(() => {
        toast.error('Something went wrong', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  }, [inputState]);

  return (
    <div>
      <Navbar userName="Anish P" coins={300} />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div className={styles.creationContainer}>
          <div className={styles.quizCreationHeaderDiv}>
            <div className={styles.quizCreationHeader}>Quiz Creation</div>
          </div>
          <div className={styles.quizCreation_main}>
            <div className={styles.enterQuestion}>
              <span className={styles.enterQuestionsHeader}>
                Enter Question
              </span>
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
                <div
                  key={item.category}
                  className={styles.radioBtnContainerLabel}
                >
                  <input
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        category: e.target.value,
                        subCategory: '',
                      })
                    }
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
                  onChange={(e) =>
                    setOptions({ ...options, subCategory: e.target.value })
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
                disabled={
                  inputState.questionText.length === 0
                  || inputState.questionOptions[0].optionDesc === ''
                }
                type="submit"
                onClick={handleSubmit}
                className={
                  inputState.questionText.length === 0
                  || inputState.questionOptions[0].optionDesc === ''
                    ? styles.submitContainer_button_disabled
                    : styles.submitContainer_button
                }
              >
                Upload Question
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCreation;
