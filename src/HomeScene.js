import * as THREE from 'three';
import aboutImage from './assets/about.jpg';
import contactImage from './assets/contact.png';
import projectImage from './assets/projects.png';

// import { Interaction } from 'three.interaction';

export default function homeScene(meshClickCallback) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1400;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  let canvasElement = document.querySelector('.sceneAbout');
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);
  var loader = new THREE.TextureLoader();

  var boxMaterial = new THREE.MeshPhongMaterial();

  var sphereGeometry = new THREE.SphereBufferGeometry(300, 40, 32);
  var sphereMaterial = new THREE.MeshPhongMaterial({});

  var coneMaterial = new THREE.MeshPhongMaterial();

  sphereMaterial.map = loader.load(contactImage);
  boxMaterial.map = loader.load(aboutImage);
  coneMaterial.map = loader.load(projectImage);

  var contact = new THREE.Mesh(sphereGeometry, sphereMaterial);
  var about = new THREE.Mesh(sphereGeometry, boxMaterial);
  var projects = new THREE.Mesh(sphereGeometry, coneMaterial);

  scene.add(about);
  scene.add(contact);
  scene.add(projects);

  about.position.x = 100;
  about.position.y = -550;
  contact.position.x = 200;
  contact.position.y = 300;
  projects.position.y = 500;
  projects.position.x = -800;

  let bounceControl = true;
  let meshArray = [about, contact, projects];
  let upArray = [true, true];
  let rightArray = [true, true];

  // const interaction = new Interaction(renderer, scene, camera);

  let pause = document.getElementById('pauseButton');
  pause.onclick = () => {
    console.log('pause clicked');
    console.log('bounce control', bounceControl);
    if (bounceControl === true) {
      bounceControl = false;
      pause.innerHTML = 'PLAY';
    } else {
      bounceControl = true;
      pause.innerHTML = 'PAUSE';
    }
  };

  about.on('click', () => {
    meshClickCallback('/About');
  });

  contact.on('click', () => {
    meshClickCallback('/contact');
  });

  projects.on('click', () => {
    meshClickCallback('/projects');
  });

  about.cursor = 'crosshair';
  contact.cursor = 'crosshair';
  projects.cursor = 'crosshair';

  let animate = () => {
    requestAnimationFrame(animate);
    for (var i = 0; i < meshArray.length; i++) {
      meshArray[i].rotation.y += 0.01;
      meshArray[i].rotation.x += 0.01;
      if (bounceControl) {
        meshArray[i].rotation.x = 0;
        meshArray[i].rotation.y = 0;
        if (upArray[i]) {
          meshArray[i].translateOnAxis(
            new THREE.Vector3(0, 1, 0).normalize(),
            3
          );
          if (meshArray[i].position.y > window.innerHeight) {
            upArray[i] = false;
          }
        } else if (!upArray[i]) {
          meshArray[i].translateOnAxis(
            new THREE.Vector3(0, 1, 0).normalize(),
            -3
          );
          if (meshArray[i].position.y < -window.innerHeight) {
            upArray[i] = true;
          }
        }

        if (rightArray[i]) {
          meshArray[i].translateOnAxis(
            new THREE.Vector3(1, 0, 0).normalize(),
            4
          );
          if (meshArray[i].position.x > window.innerWidth) {
            rightArray[i] = false;
          }
        } else if (!rightArray[i]) {
          meshArray[i].translateOnAxis(
            new THREE.Vector3(1, 0, 0).normalize(),
            -4
          );
          if (meshArray[i].position.x < -window.innerWidth) {
            rightArray[i] = true;
          }
        }
        if (!bounceControl) {
          meshArray[i].position(0, 0, 0);
        }
      }
    }
    renderer.render(scene, camera);
  };

  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate();
}
