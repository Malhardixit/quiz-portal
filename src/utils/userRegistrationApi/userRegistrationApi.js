import { postApi } from '../baseApi/api';

export const userRegistrationApi = (quizId, uid) => {
  const postData = {
    quizId,
    uid,
  };
  return postApi('/user/registerForQuiz', postData);
};
