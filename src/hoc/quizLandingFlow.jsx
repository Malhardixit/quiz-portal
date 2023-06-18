import React from 'react';
import Topnav from '../components/Navbar/Topnav';
import SideBar from '../components/SideBar/SideBar';

function quizLandingFlow(WrappedComponent) {
  return function (props) {
    return (
      <div>
        <SideBar>
          <Topnav
            userName="Anish Parkhi"
            coins={100}
          />
        </SideBar>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default quizLandingFlow;
