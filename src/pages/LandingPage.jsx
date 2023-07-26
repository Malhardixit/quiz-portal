import React from 'react';
// import QuizCreationSelection from '../components/QuizCreation/index';
// import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizQuestions from '../components/QuizQuestions/QuizQuestions';
import quizLandingFlow from '../hoc/quizLandingFLow';

function LandingPage() {
  return (
    <div style={{ marginLeft: '7rem' }}>
      {/* <QuizLanding /> */}
      {/* <QuizCreationSelection /> */}
      <QuizQuestions />
    </div>
  );
}

export default quizLandingFlow(LandingPage);
