import { postApi } from '../baseApi/api';

export const getQuizById = (quizId) => {
  const postData = {
    quizId,
  };
  return postApi('/quiz/getQuiz', postData);
};
