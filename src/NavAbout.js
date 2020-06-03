import * as THREE from "three";
import aboutImage from "./assets/about.jpg";
import { Interaction } from "three.interaction";

export default function NavAbout(aboutNav) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 50;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  let canvasElement = document.querySelector(".sceneAbout");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);

  var geometry = new THREE.BoxGeometry(5, 5, 5);
  var material = new THREE.MeshPhongMaterial();

  var loader = new THREE.TextureLoader();

  material.map = loader.load(aboutImage);

  var about = new THREE.Mesh(geometry, material);

  scene.add(about);

  let bounceControl = true;
  let up = true;
  let right = true;
  let animate = () => {
    requestAnimationFrame(animate);
    about.rotation.y += 0.01;
    if (bounceControl) {
      about.rotation.x = 0;
      about.rotation.y = 0;
      if (up) {
        about.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), 0.1);
        if (about.position.y > 7) {
          up = false;
        }
      } else if (!up) {
        about.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), -0.1);
        if (about.position.y < -7) {
          up = true;
        }
      }

      if (right) {
        about.translateOnAxis(new THREE.Vector3(1, 0, 0).normalize(), 0.1);
        if (about.position.x > 12) {
          right = false;
        }
      } else if (!right) {
        about.translateOnAxis(new THREE.Vector3(1, 0, 0).normalize(), -0.1);
        if (about.position.x < -12) {
          right = true;
        }
      }
      if (!bounceControl) {
        about.position(0, 0, 0);
      }
    }
    renderer.render(scene, camera);
  };

  const interaction = new Interaction(renderer, scene, camera);

  about.on("click", function () {
    aboutNav("about");
  });

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
