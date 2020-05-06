import * as THREE from "three";

export default function ComingSoonScene() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    3000
  );
  camera.position.z = 50;

  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xffffff, 0.3);
  scene.add(light2);

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  var geometry = new THREE.SphereGeometry(9, 32, 32);

  var loader = new THREE.TextureLoader();
  var material = new THREE.MeshPhongMaterial();
  material.map = loader.load("../public/jr.jpg");
  var sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);

  var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();
}
