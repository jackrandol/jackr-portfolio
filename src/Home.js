import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import aboutImage from './assets/about.jpg';
import contactImage from './assets/contact.png';
import projectsImage from './assets/projects.png';

import { withRouter } from 'react-router-dom';

const AboutSphere = (props) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const texture = useMemo(() => new THREE.TextureLoader().load(aboutImage), []);

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

const ContactSphere = (props) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const texture = useMemo(
    () => new THREE.TextureLoader().load(contactImage),
    []
  );

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};
const ProjectsSphere = (props) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const texture = useMemo(
    () => new THREE.TextureLoader().load(projectsImage),
    []
  );

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

function Home(props) {
  const meshClickCallback = (mesh) => {
    console.log('clicked mesh');
    props.history.push(mesh);
  };

  const [navText, setNavText] = useState('jack randol');

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
          position={[-1.2, 0, 0]}
          onPointerEnter={(e) => setNavText('about')}
          onPointerLeave={(e) => setNavText('jack randol')}
        />
        <ContactSphere
          onClick={() => meshClickCallback('contact')}
          position={[0, -2, 0]}
          onPointerEnter={(e) => setNavText('contact')}
          onPointerLeave={(e) => setNavText('jack randol')}
        />
        <ProjectsSphere
          onClick={() => meshClickCallback('projects')}
          position={[0, 2, 0]}
          onPointerEnter={(e) => setNavText('projects')}
          onPointerLeave={(e) => setNavText('jack randol')}
        />
      </Canvas>
      {/* <div className='sceneAbout'></div> */}

      <div className='pauseButton' id='pauseButton'>
        PAUSE
      </div>
    </>
  );
}

export default withRouter(Home);
