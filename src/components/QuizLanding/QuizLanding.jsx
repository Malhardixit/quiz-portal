import React from 'react';
import Topnav from '../Navbar/Topnav';
import Card from '../../ui/Card/QuizInfoCard';
import img from '../../assets/landing_back.png';

function QuizLanding() {
  return (
    <>
      <Topnav
        coins={30}
        userName="Anish P."
      />
      <Card
        title="Astronomy and Space quiz"
        question={15}
        time={30}
        tags={['Stars', 'Space', 'Earth', 'Paid']}
        image={img}
      />
    </>
  );
}

export default QuizLanding;
