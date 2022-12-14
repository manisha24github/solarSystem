import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img//mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import satrunTexture from '../img/saturn.jpg';
import satrunRingTexture from '../img/saturn-ring.jpg';
import uranus from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus-ring.jpg';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';
import { AmbientLight } from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-90, 140, 140);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const CubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = CubeTextureLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
]);

const textureLoader = new THREE.TextureLoader();

const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture),
});

const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30);
const mercuryMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(mercuryTexture),
});

const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
//scene.add(sun);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);
mercury.position.x = 28;

const pointLight = new THREE.PointLight(0xffffff, 2, 3000);
scene.add(pointLight);

function animate() {
  sun.rotateY(0.004);
  mercury.rotateY(0.004);
  mercuryObj.rotateY(0.04);
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
