import * as THREE from "three";

export default function NavContact() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, 200 / 200, 0.1, 50);
  camera.position.z = 30;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(280, 280);

  let canvasElement = document.querySelector(".sceneContact");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);

  var geometry = new THREE.TorusBufferGeometry(6, 2.5, 25, 100);
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

  var contact = new THREE.Mesh(geometry, material);

  scene.add(contact);

  var render = function () {
    requestAnimationFrame(render);
    contact.rotation.y += 0.008;
    contact.rotation.x += 0.005;
    renderer.render(scene, camera);
  };
  render();
}
