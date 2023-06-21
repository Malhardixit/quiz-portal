import React, { useState } from 'react';
import styles from './QuizCreation.module.css';
import QuizQuestionCreation from './QuizQuestionCreation';
// import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
// import IconButton from '@mui/material/IconButton';

function QuizCreation() {
  const [inputFields, setInputFields] = useState([{ options: '' }]);

  const handleAddInputField = () => {
    setInputFields([...inputFields, { options: '' }]);
  };
  const handleInputChange = (index, e) => {
    const updatedFields = [...inputFields];
    updatedFields[index].options = e.target.value;
    setInputFields(updatedFields);
  };

  return (
    <div className={styles.creationContainer}>
      <div className={styles.quizCreationHeader}>
        <span className={styles.quizCreationHeader_manual}>
          Manual Quiz creation
        </span>
        <span className={styles.quizCreationHeader_AI}>
          AI generated quiz creation
        </span>
      </div>
      <div className={styles.quizCreation_main}>
        <div className={styles.enterQuestion}>
          <span className={styles.enterQuestionsHeader}>Enter Question</span>
          <textarea
            type="text"
            required
            className={styles.questions_input}
          />
        </div>
        <div className={styles.optionsContainer}>
          <QuizQuestionCreation
            inputFields={inputFields}
            handleInputChange={handleInputChange}
            handleAddInputField={handleAddInputField}
          />
        </div>
        <div className={styles.imageContaier}>
          <p>Add Image</p>
          <input type="file" accept="image/*" id="img" />
        </div>
        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitContainer_button}>
            Upload Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCreation;
