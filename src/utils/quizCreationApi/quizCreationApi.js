import { postApi } from '../baseApi/api';

export const quizCreationApi = (quizId, question) => {
  const postData = {
    quizId,
    question,
  };
  return postApi('/quiz/addQuestion', postData);
};
