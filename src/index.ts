import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import orbitControls from './orbitControls';

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement,
  alpha: true,
});
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

orbitControls(camera, renderer);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.x = 0;
camera.position.y = 3;
camera.position.z = 7;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

function createLight() {
  const light = new THREE.PointLight(0xffffff, 2, 200);
  light.position.set(5, 5, 5);
  return light;
}

function loadglb() {
  const loader = new GLTFLoader();
  loader.load('./glb/room.glb', (gltf) => {
    scene.add(gltf.scene);
  });
}

loadglb();
scene.add(createLight());
animate();
