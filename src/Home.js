import React, { useEffect } from 'react';
import HomeScene from './HomeScene';

import { withRouter } from 'react-router-dom';

function Home(props) {
  const meshClickCallback = (mesh) => {
    props.history.push(mesh);
  };

  useEffect(() => {
    HomeScene(meshClickCallback);
  });

  return (
    <>
      <div className='title'>
        <h1 className='title-name'>Jack Randol</h1>
      </div>
      <div className='sceneAbout'></div>
      <div className='pauseButton' id='pauseButton'>
        PAUSE
      </div>
    </>
  );
}

export default withRouter(Home);
