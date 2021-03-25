import * as THREE from 'three';
import aboutImage from './assets/about.jpg';
import contactImage from './assets/contact.png';
import projectImage from './assets/projects.png';

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

  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();

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

  raycaster.setFromCamera(mouse, camera);

  let intersectAbout = raycaster.intersectObject(about);

  if (intersectAbout > 0) {
    console.log('something intersected about!');
  }

  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log('mousemove', mouse.x, mouse.y);
  }

  document.addEventListener('mousemove', onDocumentMouseMove);

  animate();
}
