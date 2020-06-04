import * as THREE from "three";
import aboutImage from "./assets/about.jpg";
import contactImage from "./assets/contact.jpg";
import projectImage from "./assets/projects.jpg";
import cvImage from "./assets/CV.jpg";

import { Interaction } from "three.interaction";

export default function homeScene(meshClickCallback) {
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
  var loader = new THREE.TextureLoader();

  var boxGeometry = new THREE.BoxGeometry(200, 200, 200);
  var boxMaterial = new THREE.MeshPhongMaterial();

  var sphereGeometry = new THREE.SphereBufferGeometry(200, 40, 32);
  var sphereMaterial = new THREE.MeshPhongMaterial({});

  var torusGeometry = new THREE.TorusBufferGeometry(150, 70, 25, 100);
  var torusMaterial = new THREE.MeshBasicMaterial();

  //// this is all to map a curve ////////////////
  CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
  CustomSinCurve.prototype.constructor = CustomSinCurve;

  CustomSinCurve.prototype.getPoint = function (t) {
    var tx = t * 3 - 1.5;
    var ty = Math.sin(1 * Math.PI * t);
    var tz = 0;

    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  };
  function CustomSinCurve(scale) {
    THREE.Curve.call(this);

    this.scale = scale === undefined ? 1 : scale;
  }

  var path = new CustomSinCurve(180);
  //////////////////////////////////////////////

  var tubeGeometry = new THREE.TubeBufferGeometry(path, 200, 70, 30, false);
  var tubeMaterial = new THREE.MeshBasicMaterial();

  sphereMaterial.map = loader.load(contactImage);
  boxMaterial.map = loader.load(aboutImage);
  torusMaterial.map = loader.load(cvImage);
  tubeMaterial.map = loader.load(projectImage);

  var contact = new THREE.Mesh(sphereGeometry, sphereMaterial);
  var about = new THREE.Mesh(boxGeometry, boxMaterial);
  var cv = new THREE.Mesh(torusGeometry, torusMaterial);
  var projects = new THREE.Mesh(tubeGeometry, tubeMaterial);

  scene.add(about);
  scene.add(contact);
  scene.add(cv);
  scene.add(projects);

  about.position.x = 100;
  about.position.y = -550;
  contact.position.x = 200;
  contact.position.y = 300;
  cv.position.x = -500;
  cv.position.y = -300;
  projects.position.y = 500;
  projects.position.x = -800;

  let bounceControl = true;
  let meshArray = [about, contact, cv, projects];
  let upArray = [true, true];
  let rightArray = [true, true];

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

  const interaction = new Interaction(renderer, scene, camera);

  about.on("click", () => {
    meshClickCallback("about");
  });

  cv.on("click", () => {
    meshClickCallback("about");
  });

  contact.on("click", () => {
    meshClickCallback("about");
  });

  projects.on("click", () => {
    meshClickCallback("about");
  });

  about.cursor = "crosshair";
  cv.cursor = "crosshair";
  contact.cursor = "crosshair";
  projects.cursor = "crosshair";

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
