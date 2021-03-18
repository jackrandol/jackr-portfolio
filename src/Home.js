import React, { useEffect } from 'react';
// import ComingSoonScene from "./ComingSoonScene";
import HomeScene from './HomeScene';
import Banner from './Banner';

import { withRouter } from 'react-router-dom';

function Home(props) {
  const meshClickCallback = (mesh) => {
    console.log('clicked', mesh);
    props.history.push(mesh);
  };

  useEffect(() => {
    HomeScene(meshClickCallback);
  });

  return (
    <>
      <Banner />
      <div className='sceneAbout'></div>
      <div className='pauseButton' id='pauseButton'>
        PAUSE
      </div>
    </>
  );
}

export default withRouter(Home);
