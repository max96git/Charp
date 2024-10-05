import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.126.1/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const avatarGeometry = new THREE.BoxGeometry(1, 2, 1);
const avatarMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const avatar = new THREE.Mesh(avatarGeometry, avatarMaterial);
scene.add(avatar);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

document.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'w': avatar.position.z -= 0.1; break;
    case 's': avatar.position.z += 0.1; break;
    case 'a': avatar.position.x -= 0.1; break;
    case 'd': avatar.position.x += 0.1; break;
  }
});

animate();
