import * as THREE from "three";
import cvImage from "./assets/CV.jpg";

export default function NavCV() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, 200 / 200, 0.1, 50);
  camera.position.z = 27;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(220, 220);

  let canvasElement = document.querySelector(".sceneCV");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);

  var geometry = new THREE.SphereBufferGeometry(8.5, 40, 32);
  var material = new THREE.MeshBasicMaterial();

  var loader = new THREE.TextureLoader();

  material.map = loader.load(cvImage);

  var cv = new THREE.Mesh(geometry, material);

  scene.add(cv);

  var render = function () {
    requestAnimationFrame(render);
    cv.rotation.y += 0.008;

    renderer.render(scene, camera);
  };
  render();
}
