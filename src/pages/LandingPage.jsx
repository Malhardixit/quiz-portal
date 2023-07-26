import React from 'react';
// import QuizCreationSelection from '../components/QuizCreation/index';
// import QuizLanding from '../components/QuizLanding/QuizLanding';
import SideBar from '../components/SideBar/SideBar';
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
    <div>
      <quizLandingFlow />
      <div style={{ display: 'flex', flexBasis: '5%' }}>
        <SideBar />
        <div style={{ marginLeft: '20rem', flexBasis: '95%', margin: 'auto' }}>
          <QuizLanding />
          <QuizCreation />
        </div>
      </div>
    </div>
  );
}

export default quizLandingFlow(LandingPage);
