import React from 'react';
import QuizLanding from '../components/QuizLanding/QuizLanding';
import QuizCreation from '../components/QuizCreation/QuizCreation';
import quizLandingFlow from '../hoc/quizLandingFLow';
import SideBar from '../components/SideBar/SideBar';

function LandingPage() {
  return (
    <div style={{ display: 'flex' }}>
      <div>

        <quizLandingFlow />
      </div>
      <div style={{ flex: '80%' }}>
        <QuizLanding />
        <QuizCreation />
      </div>
    </div>
  );
}

export default quizLandingFlow(LandingPage);
