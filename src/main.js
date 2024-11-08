import * as THREE from "three";
import { createCampus } from "./campus.js";

function main() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 50, 150);
  camera.lookAt(0, 5, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(100, 100, 100);
  scene.add(directionalLight);

  const movingCircleMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
  }); // Red color for the circle
  const movingCircle = new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    movingCircleMaterial
  );

  let circlePositionZ = -70; // Initial position on the road
  const speed = 1.5; // Speed of movement

  createCampus(scene, movingCircle);

  function animate() {
    requestAnimationFrame(animate);

    // Update circle position
    circlePositionZ += speed;
    if (circlePositionZ > 80) circlePositionZ = -70; // Loop back when it reaches the end of the road

    movingCircle.position.set(0, 5, circlePositionZ); // Move along the road

    renderer.render(scene, camera);
  }

  animate();
}

main();
