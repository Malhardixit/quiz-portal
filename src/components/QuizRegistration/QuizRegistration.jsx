import React, { useCallback, useState } from 'react';
import styles from './QuizRegistration.module.css';
import { userRegistrationApi } from
  '../../utils/userRegistrationApi/userRegistrationApi';

function QuizRegistration() {
  const [inputState, setInputState] = useState({
    quizId: '',
    uid: '',
  });

  const handleQuizIdChange = useCallback((e) => {
    setInputState({ ...inputState, quizId: e.target.value });
  }, [inputState]);

  const handleUIDChange = useCallback((e) => {
    setInputState({ ...inputState, uid: e.target.value });
  }, [inputState]);

  const handleClick = () => {
    const { quizId, uid } = inputState;
    userRegistrationApi(quizId, uid);
  };

  return (
    <div>
      <div className={styles.userRegistrationContainer}>
        <label>Enter the quiz id</label>
        <input
          name="quizId"
          onChange={(e) => handleQuizIdChange(e)}
          value={inputState.quizId}
          type="text"
        />
        <label>Enter the user id</label>
        <input
          name="uid"
          onChange={(e) => handleUIDChange(e)}
          value={inputState.uid}
          type="text"
        />
        <button
          onClick={handleClick}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizRegistration;
