import React from 'react';

import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizCreation from '../ui/QuizCreation/QuizCreation';
import quizLandingFlow from '../hoc/quizLandingFLow';

function LandingPage() {
  return (
    <QuizLanding />
  );
}

export default quizLandingFlow(LandingPage);
