// Get references to the canvas and buttons
const canvas = document.getElementById('avatar-preview');
const loadAvatarBtn = document.getElementById('loadAvatarBtn');
const saveAvatarBtn = document.getElementById('saveAvatarBtn');

// Set up the 3D scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light source
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Function to create an avatar
function createAvatar() {
    const geometry = new THREE.BoxGeometry(); // Placeholder for avatar geometry
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const avatar = new THREE.Mesh(geometry, material);
    scene.add(avatar);
    return avatar;
}

let avatar;

// Load avatar when the button is clicked
loadAvatarBtn.addEventListener('click', () => {
    if (!avatar) {
        avatar = createAvatar();
        camera.position.z = 5;
    }
});

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Save avatar functionality (placeholder)
saveAvatarBtn.addEventListener('click', () => {
    alert('Avatar saved!');
});

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
