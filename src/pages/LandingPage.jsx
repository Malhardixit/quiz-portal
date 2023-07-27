import React from 'react';
import QuizLanding from '../components/QuizLanding/QuizLanding';
import SideBar from '../components/SideBar/SideBar';
import Navbar from '../components/newNavbar';
import quizLandingFlow from '../hoc/quizLandingFLow';

function LandingPage() {
  const quizes = [1, 2, 3, 4, 5];
  return (
    <>
      <Navbar userName="Anish P" coins={300} />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div style={{ marginLeft: '20rem', flexBasis: '95%', margin: 'auto' }}>
          {quizes.map((item) => (
            <QuizLanding key={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default quizLandingFlow(LandingPage);
