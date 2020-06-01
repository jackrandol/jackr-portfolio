import * as THREE from "three";
import aboutImage from "./assets/about.jpg";

export default function NavAbout() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, 200 / 200, 0.1, 50);
  camera.position.z = 30;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(230, 230);

  let canvasElement = document.querySelector(".sceneAbout");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);

  var geometry = new THREE.BoxGeometry(12.5, 12.5, 12.5);
  var material = new THREE.MeshBasicMaterial();

  var loader = new THREE.TextureLoader();

  material.map = loader.load(aboutImage);

  var about = new THREE.Mesh(geometry, material);

  scene.add(about);

  var render = function () {
    requestAnimationFrame(render);
    about.rotation.y += 0.008;
    about.rotation.x += 0.005;
    renderer.render(scene, camera);
  };
  render();
}
