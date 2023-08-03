import React from 'react';
import QuizCreation from '../components/QuizCreation/QuizCreationSelection';
import QuizLanding from '../components/QuizLanding/QuizLanding';
import SideBar from '../components/SideBar/SideBar';
import Navbar from '../components/newNavbar';
import quizLandingFlow from '../hoc/quizLandingFLow';

function LandingPage() {
  return (
    <>
      <Navbar userName="Anish P" coins={300} />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div style={{ marginLeft: '20rem', flexBasis: '95%', margin: 'auto' }}>
          <QuizLanding />
        </div>
      </div>
    </>
  );
}

export default quizLandingFlow(LandingPage);
