import * as THREE from 'three';
import { OrbitControls, orbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercury from '../img/mercury.jpg';
import venus from '../img/venus.jpg';
import earth from '../img/earth.jpg';
import mars from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturn from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn-ring.jpg';
import uranus from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus-ring.jpg';
import neptune from '../img/neptune.jpg';
import pluto from '../img/pluto.jpg';

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-90, 140, 140);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
]);

const textureLoader = new THREE.TextureLoader();

function animate() {
  renderer.render(scene, camera);
  renderer.setAnimationLoop(animate);
}
