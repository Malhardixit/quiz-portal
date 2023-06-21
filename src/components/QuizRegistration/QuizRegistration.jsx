import React, { useState } from 'react';
import styles from './QuizRegistration.module.css';
import { userRegistrationApi } from
  '../../utils/userRegistrationApi/userRegistrationApi';

function QuizRegistration() {
  const [inputState, setInputState] = useState({
    quizId: '',
    uid: '',
  });

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    userRegistrationApi(inputState.quizId, inputState.uid);
  };
  return (
    <div>
      <div className={styles.userRegistrationContainer}>
        <label>Enter the quiz id</label>
        <input name="quizId" onChange={handleChange} type="text" />
        <label>Enter the user id</label>
        <input name="uid" onChange={handleChange} type="text" />
        <button onClick={handleClick} type="submit">Submit</button>
      </div>
    </div>
  );
}

export default QuizRegistration;
