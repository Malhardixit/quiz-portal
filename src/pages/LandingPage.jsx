import React from 'react';

import QuizLanding from '../components/QuizLanding/QuizLanding';
import SideBar from '../components/SideBar/SideBar';
import QuizCreation from '../components/QuizCreation/QuizCreation';
import Topnav from '../components/Navbar/Topnav';

function LandingPage() {
  return (
    <>
      <Topnav
        coins={30}
        userName="Anish P."
      />
      <SideBar />
      <QuizLanding />
      <QuizCreation />
    </>
  );
}

export default LandingPage;
