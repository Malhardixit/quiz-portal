import React from 'react';

import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizCreation from '../components/QuizCreation/QuizCreation';
import quizLandingFlow from '../hoc/quizLandingFLow';

function LandingPage() {
  return (
    <>
      <QuizLanding />
      <QuizCreation />
    </>
  );
}

export default quizLandingFlow(LandingPage);
