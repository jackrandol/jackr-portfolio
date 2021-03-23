import React, { useEffect, useState } from 'react';
// import ComingSoonScene from "./ComingSoonScene";
import HomeScene from './HomeScene';
import Banner from './Banner';
import nameText from './assets/logoticker.png';

import { withRouter } from 'react-router-dom';

function Home(props) {
  const [navText, setNavText] = useState('Jack Randol');
  const meshClickCallback = (mesh) => {
    console.log('clicked', mesh);
    props.history.push(mesh);
  };

  const meshHoverCallback = (mesh) => {
    setNavText(mesh);
  };

  useEffect(() => {
    HomeScene(meshClickCallback, meshHoverCallback);
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
