import React from 'react';

import QuizLanding from '../components/QuizLanding/QuizLanding';
import SideBar from '../components/SideBar/SideBar';
import QuizCreation from '../components/QuizCreation/QuizCreation';

function LandingPage() {
  return (
    <>
      <SideBar />
      <QuizLanding />
      {/*
       */}
      {/* <QuizCreation/> */}
    </>
  );
}

export default LandingPage;
