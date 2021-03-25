import React, { useState } from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import ProjectsSphere from './ProjectsSphere';
import AboutSphere from './AboutSphere';
import ContactSphere from './ContactSphere';
import { withRouter } from 'react-router-dom';

function Home(props) {
  const meshClickCallback = (mesh) => {
    props.history.push(mesh);
  };

  const [pause, togglePause] = useState(false);
  const [pauseText, setPauseText] = useState('PAUSE');

  const handlePauseClick = () => {
    togglePause(!pause);
    if (!pause) {
      setPauseText('PLAY');
    } else {
      setPauseText('PAUSE');
    }
  };

  return (
    <>
      <div className='title'>
        <h1 className='title-name' id='title'>
          jack randol
        </h1>
      </div>
      <Canvas style={{ height: '100vh', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <AboutSphere
          onClick={() => meshClickCallback('about')}
          position={[-2, 0, 0]}
          pause={pause}
        />
        <ContactSphere
          onClick={() => meshClickCallback('contact')}
          position={[2, -2, 0]}
          pause={pause}
        />
        <ProjectsSphere
          onClick={() => meshClickCallback('projects')}
          position={[0.7, 1.8, 0.2]}
          pause={pause}
          className='projectsSphere'
        />
      </Canvas>

      <div
        onClick={(e) => {
          handlePauseClick();
        }}
        className='pauseButton'
      >
        {pauseText}
      </div>
    </>
  );
}

export default withRouter(Home);
