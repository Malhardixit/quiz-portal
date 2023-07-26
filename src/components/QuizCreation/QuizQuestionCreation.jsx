import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './QuizCreation.module.css';

function QuizQuestionCreation({
  inputFields, handleInputChange,
  handleAddInputField,
}) {
  return (
    <div>
      <p>Add Options</p>
      <div className={styles.optionsContainer}>
        {inputFields.map((field, index) => (
          <div key={index} className={styles.optionsContainer}>
            <input
              className={styles.optionsContainer_input}
              value={field.options}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
        <IconButton>
          <AddCircleIcon
            style={{ display: 'inline', fontSize: '3rem', color: 'white' }}
            onClick={handleAddInputField}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default QuizQuestionCreation;
