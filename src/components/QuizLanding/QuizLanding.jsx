import React from 'react';
import img from '../../assets/landing_back.png';
import QuizInfoCard from '../../ui/QuizInfoCard/QuizInfoCard';

function QuizLanding() {
  return (
    <QuizInfoCard
      title="Astronomy and Space quiz"
      question={15}
      time={30}
      tags={['Stars', 'Space', 'Earth', 'Paid']}
      image={img}
    />
  );
}

export default QuizLanding;
