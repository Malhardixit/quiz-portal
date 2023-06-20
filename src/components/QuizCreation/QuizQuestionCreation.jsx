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
      <div className={styles.optionsContainer}>
        <div>
          {inputFields.map((field, index) => (
            <div className={styles.optionsContainerInnerDiv}>
              <div className={styles.optionsContainerIndex}>
                {`${index + 1}.`}
              </div>
              <input
                className={styles.optionsContainer_input}
                key={field.options}
                value={field.options}
                onChange={(e) => handleInputChange(index, e)}
              />

            </div>
          ))}
        </div>
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
