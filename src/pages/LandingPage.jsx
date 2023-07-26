import React from 'react';
// import QuizCreationSelection from '../components/QuizCreation/index';
// import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizQuestions from '../components/QuizQuestions/QuizQuestions';
import quizLandingFlow from '../hoc/quizLandingFLow';
// import Modal from '../common/Modal/Modal';

function LandingPage() {
  return (
    <div style={{ marginLeft: '7rem' }}>
      {/* <QuizLanding /> */}
      {/* <QuizCreationSelection /> */}
      <QuizQuestions />
      {/* <Modal /> */}
    </div>
  );
}

export default quizLandingFlow(LandingPage);
