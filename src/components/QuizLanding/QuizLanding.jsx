import React from 'react';
import Topnav from '../Navbar/Topnav';
import Card from '../../ui/Card/QuizInfoCard';
import img from '../../assets/landing_back.png';

const array = [1, 2, 3, 4, 5];


function QuizLanding() {
  return (
    <>
      <Topnav
        coins={30}
        userName="Anish P."/>
      <Card
        title="Astronomy and Space quiz"
        question={15}
        time={30}
        tags = {['Stars', 'Space', 'Earth', 'Paid']}
        image = {img}
      />
      {/* {
        array.map((item, index) => {
          return (
           
          );
        })
      } */}
    </>
  );
}

export default QuizLanding;
