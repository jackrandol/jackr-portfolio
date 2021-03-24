import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import aboutImage from './assets/about.jpg';
import contactImage from './assets/contact.png';
import projectsImage from './assets/projects.png';

import { withRouter } from 'react-router-dom';

const AboutSphere = (props) => {
  const mesh = useRef();
  useEffect(() => {
    console.log('stuff?', props.stuff);
  });
  useFrame(() => {
    if (!props.pause) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  const texture = useMemo(() => new THREE.TextureLoader().load(aboutImage), []);

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshPhongMaterial>
    </mesh>
  );
};

const ContactSphere = (props) => {
  const mesh = useRef();

  useFrame(() => {
    if (!props.pause) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  const texture = useMemo(
    () => new THREE.TextureLoader().load(contactImage),
    []
  );

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshPhongMaterial>
    </mesh>
  );
};
const ProjectsSphere = (props) => {
  const mesh = useRef();

  useFrame(() => {
    if (!props.pause) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  const texture = useMemo(
    () => new THREE.TextureLoader().load(projectsImage),
    []
  );

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshPhongMaterial>
    </mesh>
  );
};

function Home(props) {
  const meshClickCallback = (mesh) => {
    console.log('clicked mesh');
    props.history.push(mesh);
  };

  const [hovered, setHovered] = useState(false);
  const [navText, setNavText] = useState('jack randol');
  const [pause, togglePause] = useState(false);
  const [pauseText, setPauseText] = useState('PAUSE');

  const toggleHover = (mesh, hover) => {
    setNavText(mesh);
    setHovered(hover);
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const handlePauseClick = () => {
    console.log('toggled');
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
        <h1 className='title-name'>{navText}</h1>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <AboutSphere
          onClick={() => meshClickCallback('about')}
          position={[-2, 0, 0]}
          onPointerEnter={(e) => toggleHover('about', true)}
          onPointerLeave={(e) => toggleHover('jack randol', false)}
          pause={pause}
        />
        <ContactSphere
          onClick={() => meshClickCallback('contact')}
          position={[2, -2, 0]}
          onPointerEnter={(e) => toggleHover('contact', true)}
          onPointerLeave={(e) => toggleHover('jack randol', false)}
          pause={pause}
        />
        <ProjectsSphere
          onClick={() => meshClickCallback('projects')}
          position={[0.7, 1.8, 0.2]}
          onPointerEnter={(e) => toggleHover('projects', true)}
          onPointerLeave={(e) => toggleHover('jack randol', false)}
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
