import React from 'react';
// import Topnav from '../components/Navbar/Topnav';
import Navbar from '../components/newNavbar/Navbar';

function quizLandingFlow(WrappedComponent) {
  return function (props) {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {/* <SideBar />
          <Topnav
            userName="Anish Parkhi"
            coins={100}
          /> */}
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default quizLandingFlow;
