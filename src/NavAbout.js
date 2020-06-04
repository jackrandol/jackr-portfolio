import * as THREE from "three";
import aboutImage from "./assets/about.jpg";
import contactImage from "./assets/contact.jpg";
import { Interaction } from "three.interaction";

export default function NavAbout(aboutNav) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1000;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  let canvasElement = document.querySelector(".sceneAbout");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);

  var boxGeometry = new THREE.BoxGeometry(200, 200, 200);
  var boxMaterial = new THREE.MeshPhongMaterial();

  var sphereGeometry = new THREE.SphereBufferGeometry(200, 40, 32);
  var sphereMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.5,
    refractionRatio: 1,
  });

  var loader = new THREE.TextureLoader();

  sphereMaterial.map = loader.load(contactImage);

  var contact = new THREE.Mesh(sphereGeometry, sphereMaterial);

  boxMaterial.map = loader.load(aboutImage);

  var about = new THREE.Mesh(boxGeometry, boxMaterial);

  scene.add(about);
  scene.add(contact);

  about.position.x = 100;
  about.position.y = -50;

  var navMeshes = [about, contact];

  let bounceControl = true;
  let up = true;
  let right = true;
  let animate = () => {
    requestAnimationFrame(animate);

    for (var i = 0; i < navMeshes.length; i++) {
      navMeshes[i].rotation.y += 0.01;
      // contact.rotation.y += 0.01;
      if (bounceControl) {
        navMeshes[i].rotation.x = 0;
        navMeshes[i].rotation.y = 0;
        // contact.rotation.x = 0;
        // contact.rotation.y = 0;
        if (up) {
          navMeshes[i].translateOnAxis(
            new THREE.Vector3(0, 1, 0).normalize(),
            3
          );
          if (navMeshes[i].position.y > window.innerHeight) {
            up = false;
          }
        } else if (!up) {
          navMeshes[i].translateOnAxis(
            new THREE.Vector3(0, 1, 0).normalize(),
            -3
          );
          if (navMeshes[i].position.y < -window.innerHeight) {
            up = true;
          }
        }

        if (right) {
          navMeshes[i].translateOnAxis(
            new THREE.Vector3(1, 0, 0).normalize(),
            4
          );
          if (navMeshes[i].position.x > window.innerWidth) {
            right = false;
          }
        } else if (!right) {
          navMeshes[i].translateOnAxis(
            new THREE.Vector3(10, 0, 0).normalize(),
            -4
          );
          if (navMeshes[i].position.x < -window.innerWidth) {
            right = true;
          }
        }
        if (!bounceControl) {
          navMeshes[i].position(0, 0, 0);
        }
      }
    }
    console.log("height", window.innerHeight, "width", window.innerWidth);
    console.log("(x,y)", about.position.x, about.position.y);
    renderer.render(scene, camera);
  };

  const interaction = new Interaction(renderer, scene, camera);

  about.on("click", function () {
    aboutNav("about");
  });

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // render();
  }

  let pause = document.getElementById("pauseButton");
  pause.onclick = () => {
    console.log("pause clicked");
    if (bounceControl === true) {
      bounceControl = false;
      pause.innerHTML = "PLAY";
    } else {
      bounceControl = true;
      pause.innerHTML = "PAUSE";
    }
  };
  animate();
}
