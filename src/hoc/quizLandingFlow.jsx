import React from 'react';
// import Topnav from '../components/Navbar/Topnav';
import Navbar from '../components/newNavbar/Navbar';

function quizLandingFlow(WrappedComponent) {
  return function (props) {
    return (
      <div>
        <div>
          <Navbar
            userName="Anish P"
            coins={100}
          />
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default quizLandingFlow;
