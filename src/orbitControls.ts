import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function orbitControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): void {
  new OrbitControls(camera, renderer.domElement).update();
}
