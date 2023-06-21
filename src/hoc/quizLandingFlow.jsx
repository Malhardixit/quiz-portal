import React from 'react';
// import Topnav from '../components/Navbar/Topnav';
import SideBar from '../components/SideBar/SideBar';
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
          <SideBar />
          {/* <SideBar /> */}
          {/* <Topnav
            userName="Anish Parkhi"
            coins={100}
          /> */}
          {/* <Navbar /> */}
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default quizLandingFlow;
