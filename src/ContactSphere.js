import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import contactImage from './assets/contact.png';

const ContactSphere = (props) => {
  const contactMesh = useRef();
  const [hovered, setHovered] = useState(false);
  let title = document.getElementById('title');
  useEffect(() => {
    if (hovered) {
      title.innerHTML = 'contact';
    } else {
      title.innerHTML = 'jack randol';
    }
  }, [hovered, title]);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return function cleanup() {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  const toggleHover = (hover) => {
    setHovered(hover);
  };

  const [vec] = useState(() => new THREE.Vector3());
  const [vec2] = useState(() => new THREE.Vector3());
  const [upArray, setUpArray] = useState(true);
  const [rightArray, setRightArray] = useState(true);

  useFrame(() => {
    if (!props.pause && !hovered) {
      if (upArray) {
        contactMesh.current.translateOnAxis(
          vec.set(0, 0.01, 0).normalize(),
          0.02
        );
        if (contactMesh.current.position.y > 2.7) {
          setUpArray(false);
        }
      }
      if (!upArray) {
        contactMesh.current.translateOnAxis(
          vec.set(0, 0.01, 0).normalize(),
          -0.02
        );
        if (contactMesh.current.position.y < -2.7) {
          setUpArray(true);
        }
      }
      if (rightArray) {
        contactMesh.current.translateOnAxis(
          vec2.set(0.1, 0, 0).normalize(),
          0.03
        );
        if (contactMesh.current.position.x > 4.5) {
          setRightArray(false);
        }
      } else if (!rightArray) {
        contactMesh.current.translateOnAxis(
          vec2.set(0.1, 0, 0).normalize(),
          -0.03
        );
        if (contactMesh.current.position.x < -4.5) {
          setRightArray(true);
        }
      }
    }
  });

  const texture = useMemo(
    () => new THREE.TextureLoader().load(contactImage),
    []
  );

  return (
    <mesh
      {...props}
      ref={contactMesh}
      onPointerEnter={(e) => toggleHover(true)}
      onPointerLeave={(e) => toggleHover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial attach='material' transparent side={THREE.DoubleSide}>
        <primitive attach='map' object={texture} />
      </meshPhongMaterial>
    </mesh>
  );
};

export default ContactSphere;
