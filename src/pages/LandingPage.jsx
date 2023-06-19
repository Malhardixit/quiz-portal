import React from 'react';
import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizCreation from '../components/QuizCreation/QuizCreation';
import quizLandingFlow from '../hoc/quizLandingFLow';

function LandingPage() {
  return (
    <div style={{ marginLeft: '7rem' }}>
      <QuizLanding />
      <QuizCreation />
    </div>
  );
}

export default quizLandingFlow(LandingPage);
