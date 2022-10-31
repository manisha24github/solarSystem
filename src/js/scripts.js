import * as THREE from './three';
import { OrbitControls, orbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(-90, 140, 140);
orbit.update();
