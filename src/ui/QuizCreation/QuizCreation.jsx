import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './QuizCreation.module.css';

function QuizCreation() {
  const [inputFields, setInputFields] = useState(['']);

  const handleAddInputField = () => {
    setInputFields([...inputFields, '']);
  };

  const handleInputChange = (index, value) => {
    const updatedFields = [...inputFields];
    updatedFields[index] = value;
    setInputFields(updatedFields);
  };

  const renderInputFields = () => inputFields.map((field, index) => (
    <div className={styles.optionsContainer}>
      <input
        className={styles.optionsContainer_input}
        key={index}
        value={field}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    </div>
  ));

  return (
    <div className={styles.creationContainer}>
      <div className={styles.quizCreationHeader}>
        <span
          className={styles.quizCreationHeader_manual}
        >
          Manual Quiz creation
        </span>
        <span
          className={styles.quizCreationHeader_AI}
        >
          AI generated quiz creation
        </span>
      </div>
      <div className={styles.quizCreation_main}>
        <div className={styles.enterQuestion}>
          <p>Enter Question</p>
          <textarea
            type="text"
            required
            className={styles.questions_input}
          />
        </div>
        <div className={styles.optionsContainer}>
          <p>Add Options</p>
          {renderInputFields()}
          <IconButton>
            <AddCircleIcon
              style={{ display: 'inline', fontSize: '3rem', color: 'white' }}
              onClick={handleAddInputField}
            />
          </IconButton>
        </div>
        <div className={styles.imageContaier}>
          <p>Add Image</p>

        </div>

      </div>
    </div>
  );
}

export default QuizCreation;
