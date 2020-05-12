import * as THREE from "three";
import jr from "./assets/JRWrapper.jpg";

export default function ComingSoonScene() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, 200 / 200, 0.1, 50);
  camera.position.z = 30;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(200, 200);

  let canvasElement = document.querySelector(".sceneY");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var geometry = new THREE.SphereGeometry(10, 32, 32);
  var material = new THREE.MeshPhongMaterial();

  var loader = new THREE.TextureLoader();

  material.map = loader.load(jr);

  //   window.addEventListener("resize", () => {
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //   });

  var imageBall = new THREE.Mesh(geometry, material);

  scene.add(imageBall);

  var render = function () {
    requestAnimationFrame(render);
    imageBall.rotation.y += 0.008;
    renderer.render(scene, camera);
  };
  render();
}
