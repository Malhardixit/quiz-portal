import React from 'react';
import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizCreation from '../components/QuizCreation/QuizCreation';
import quizLandingFlow from '../hoc/quizLandingFLow';
import SideBar from '../components/SideBar/SideBar';

function LandingPage() {
  return (
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
