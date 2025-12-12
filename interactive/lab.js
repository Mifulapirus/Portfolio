import * as THREE from 'three';

// Project data
const projects = [
    {
        name: 'PawTracker',
        position: { x: -8, z: -8 },
        description: 'GPS tracker system for dogs using LoRa technology with web interface.',
        tags: ['IoT', 'LoRa', 'GPS', 'Web'],
        color: 0x3ac3ff
    },
    {
        name: 'Noter',
        position: { x: 8, z: -8 },
        description: 'Audio transcription manager with AI-powered speaker diarization.',
        tags: ['AI', 'Python', 'Whisper', 'NeMo'],
        color: 0xa78bfa
    },
    {
        name: 'CSA',
        position: { x: -8, z: 8 },
        description: 'Canine Stick Authority - Premium Stïk Registry Platform.',
        tags: ['Full-stack', 'TypeScript', 'MongoDB'],
        color: 0x36c48d
    },
    {
        name: 'Democratic-Robot',
        position: { x: 8, z: 8 },
        description: 'ESP32-C3 robot controlled via web interface with motor and servo control.',
        tags: ['ESP32', 'Robotics', 'C++', 'Web'],
        color: 0xff7a59
    },
    {
        name: 'Arduino Logger',
        position: { x: 0, z: -8 },
        description: 'Logging library for Arduinos and ESP with multiple output formats.',
        tags: ['Arduino', 'C++', 'Library'],
        color: 0xffc15e
    },
    {
        name: 'KiCad Components',
        position: { x: 0, z: 8 },
        description: 'Custom KiCad components and footprints for electronics projects.',
        tags: ['Hardware', 'KiCad', 'PCB'],
        color: 0x00d4ff
    }
];

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0d12);
scene.fog = new THREE.Fog(0x0a0d12, 10, 30);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 8, 12);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 0.6);
mainLight.position.set(5, 10, 5);
mainLight.castShadow = true;
mainLight.shadow.mapSize.width = 2048;
mainLight.shadow.mapSize.height = 2048;
scene.add(mainLight);

// Lab room
const floorGeometry = new THREE.PlaneGeometry(30, 30);
const floorMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x1a1f2e,
    roughness: 0.8,
    metalness: 0.2
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// Grid on floor
const gridHelper = new THREE.GridHelper(30, 30, 0x2a3f5f, 0x1a2332);
gridHelper.position.y = 0.01;
scene.add(gridHelper);

// Walls
const wallMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x0e1621,
    roughness: 0.9
});

// Back wall
const backWall = new THREE.Mesh(new THREE.BoxGeometry(30, 10, 0.5), wallMaterial);
backWall.position.set(0, 5, -15);
backWall.receiveShadow = true;
scene.add(backWall);

// Left wall
const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 10, 30), wallMaterial);
leftWall.position.set(-15, 5, 0);
leftWall.receiveShadow = true;
scene.add(leftWall);

// Right wall
const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 10, 30), wallMaterial);
rightWall.position.set(15, 5, 0);
rightWall.receiveShadow = true;
scene.add(rightWall);

// Create character
const characterGroup = new THREE.Group();

// Body (capsule-like)
const bodyGeometry = new THREE.CapsuleGeometry(0.3, 0.8, 8, 16);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x60a5fa });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
body.position.y = 1;
body.castShadow = true;
characterGroup.add(body);

// Head
const headGeometry = new THREE.SphereGeometry(0.35, 16, 16);
const headMaterial = new THREE.MeshStandardMaterial({ color: 0x60a5fa });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1.8;
head.castShadow = true;
characterGroup.add(head);

// Eyes
const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x0a0d12 });
const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye.position.set(-0.12, 1.85, 0.3);
characterGroup.add(leftEye);
const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
rightEye.position.set(0.12, 1.85, 0.3);
characterGroup.add(rightEye);

// Arms
const armGeometry = new THREE.CapsuleGeometry(0.1, 0.6, 4, 8);
const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
leftArm.position.set(-0.4, 1, 0);
leftArm.castShadow = true;
characterGroup.add(leftArm);
const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
rightArm.position.set(0.4, 1, 0);
rightArm.castShadow = true;
characterGroup.add(rightArm);

// Legs
const legGeometry = new THREE.CapsuleGeometry(0.12, 0.7, 4, 8);
const leftLeg = new THREE.Mesh(legGeometry, bodyMaterial);
leftLeg.position.set(-0.2, 0.4, 0);
leftLeg.castShadow = true;
characterGroup.add(leftLeg);
const rightLeg = new THREE.Mesh(legGeometry, bodyMaterial);
rightLeg.position.set(0.2, 0.4, 0);
rightLeg.castShadow = true;
characterGroup.add(rightLeg);

characterGroup.position.set(0, 0, 0);
scene.add(characterGroup);

// Project stations
const stations = [];
projects.forEach(project => {
    const stationGroup = new THREE.Group();
    
    // Platform
    const platformGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.3, 32);
    const platformMaterial = new THREE.MeshStandardMaterial({ 
        color: project.color,
        emissive: project.color,
        emissiveIntensity: 0.3,
        roughness: 0.5
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = 0.15;
    platform.receiveShadow = true;
    stationGroup.add(platform);
    
    // Glow ring
    const ringGeometry = new THREE.TorusGeometry(1.6, 0.1, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ 
        color: project.color,
        transparent: true,
        opacity: 0.6
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.05;
    stationGroup.add(ring);
    
    // Project display (floating hologram)
    const displayGeometry = new THREE.BoxGeometry(1, 1, 0.1);
    const displayMaterial = new THREE.MeshBasicMaterial({ 
        color: project.color,
        transparent: true,
        opacity: 0.7
    });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.y = 2;
    stationGroup.add(display);
    
    // Point light
    const pointLight = new THREE.PointLight(project.color, 1, 5);
    pointLight.position.y = 1;
    stationGroup.add(pointLight);
    
    stationGroup.position.set(project.position.x, 0, project.position.z);
    scene.add(stationGroup);
    
    stations.push({
        group: stationGroup,
        ring: ring,
        display: display,
        project: project
    });
});

// Character movement
const keys = {};
let velocity = new THREE.Vector3();
const speed = 0.1;
let walkAnimation = 0;
let isWalking = false;
let lookingUp = false;

window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Modal functions
function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    lookingUp = false;
}

function showProject(project) {
    document.getElementById('modal-title').textContent = project.name;
    document.getElementById('modal-description').textContent = project.description;
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });
    document.getElementById('project-modal').classList.add('active');
    lookingUp = true;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Movement
    velocity.set(0, 0, 0);
    isWalking = false;
    
    if (!lookingUp) {
        if (keys['w'] || keys['arrowup']) {
            velocity.z -= speed;
            isWalking = true;
        }
        if (keys['s'] || keys['arrowdown']) {
            velocity.z += speed;
            isWalking = true;
        }
        if (keys['a'] || keys['arrowleft']) {
            velocity.x -= speed;
            isWalking = true;
        }
        if (keys['d'] || keys['arrowright']) {
            velocity.x += speed;
            isWalking = true;
        }
    }
    
    // Apply movement with boundaries
    const newX = characterGroup.position.x + velocity.x;
    const newZ = characterGroup.position.z + velocity.z;
    
    if (newX > -14 && newX < 14) {
        characterGroup.position.x = newX;
    }
    if (newZ > -14 && newZ < 14) {
        characterGroup.position.z = newZ;
    }
    
    // Rotate character to face movement direction
    if (isWalking && velocity.length() > 0) {
        const angle = Math.atan2(velocity.x, velocity.z);
        characterGroup.rotation.y = angle;
    }
    
    // Walking animation
    if (isWalking) {
        walkAnimation += 0.15;
        leftLeg.rotation.x = Math.sin(walkAnimation) * 0.5;
        rightLeg.rotation.x = Math.sin(walkAnimation + Math.PI) * 0.5;
        leftArm.rotation.x = Math.sin(walkAnimation + Math.PI) * 0.3;
        rightArm.rotation.x = Math.sin(walkAnimation) * 0.3;
        body.position.y = 1 + Math.abs(Math.sin(walkAnimation * 2)) * 0.05;
    } else {
        leftLeg.rotation.x = 0;
        rightLeg.rotation.x = 0;
        leftArm.rotation.x = 0;
        rightArm.rotation.x = 0;
        body.position.y = 1;
    }
    
    // Look up animation
    if (lookingUp) {
        head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, -0.5, 0.1);
    } else {
        head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, 0, 0.1);
    }
    
    // Check proximity to stations
    stations.forEach(station => {
        const distance = characterGroup.position.distanceTo(station.group.position);
        
        // Animate ring
        station.ring.rotation.z += 0.02;
        station.display.rotation.y += 0.01;
        station.display.position.y = 2 + Math.sin(Date.now() * 0.001) * 0.1;
        
        if (distance < 2.5 && !lookingUp) {
            // Trigger project view
            showProject(station.project);
        }
    });
    
    // Camera follow
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, characterGroup.position.x, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, characterGroup.position.z + 12, 0.05);
    camera.lookAt(characterGroup.position.x, 2, characterGroup.position.z);
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Hide loading screen
document.getElementById('loading').style.display = 'none';

// Setup close button listener with error handling
const closeBtn = document.getElementById('close-modal-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        console.log('Close button clicked');
        closeModal();
    });
    console.log('Close button listener attached');
} else {
    console.error('Close button not found!');
}

// Also allow ESC key to close
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Start animation
animate();