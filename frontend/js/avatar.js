let scene, camera, renderer, avatar;

function initAvatarPreview() {
    // Basic Three.js setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('avatar-preview').appendChild(renderer.domElement);

    // Avatar creation (cube for now, later replace with models)
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    avatar = new THREE.Mesh(geometry, material);
    scene.add(avatar);

    camera.position.z = 5;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function selectItem(type) {
    // Simple item selection (extendable to load real assets)
    if (type === 'hat') avatar.material.color.set(0xff0000);  // Change hat color
    else if (type === 'shirt') avatar.material.color.set(0x0000ff);  // Change shirt color
}

function saveAvatar() {
    alert('Avatar saved!');  // Replace with backend call to save
}

initAvatarPreview();
