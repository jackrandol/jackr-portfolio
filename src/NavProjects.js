import * as THREE from "three";
import projectsImage from "./assets/projects.jpg";

export default function NavProjects(scale) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, 300 / 300, 0.1, 50);
  camera.position.z = 30;

  var renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(280, 280);

  let canvasElement = document.querySelector(".sceneProjects");
  canvasElement.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  var light2 = new THREE.PointLight(0xf800, 0.2);
  scene.add(light2);

  CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
  CustomSinCurve.prototype.constructor = CustomSinCurve;

  CustomSinCurve.prototype.getPoint = function (t) {
    var tx = t * 3 - 1.5;
    var ty = Math.sin(1 * Math.PI * t);
    var tz = 0;

    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  };

  var path = new CustomSinCurve(5);
  var geometry = new THREE.TubeBufferGeometry(path, 50, 2.5, 30, false);
  var material = new THREE.MeshBasicMaterial();
  var mesh = new THREE.Mesh(geometry, material);
  var loader = new THREE.TextureLoader();

  material.map = loader.load(projectsImage);
  scene.add(mesh);

  function CustomSinCurve(scale) {
    THREE.Curve.call(this);

    this.scale = scale === undefined ? 1 : scale;
  }

  var render = function () {
    requestAnimationFrame(render);
    mesh.rotation.y += 0.008;
    mesh.rotation.x += 0.005;
    renderer.render(scene, camera);
  };
  render();
}
