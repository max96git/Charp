let scene, camera, renderer;

function initEditor() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('editor').appendChild(renderer.domElement);

    camera.position.z = 5;
    animate();
}

function addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function saveGame() {
    alert('Game saved!');  // Replace with backend save logic
}

initEditor();
