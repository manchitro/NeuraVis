//setting scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//resize canvas on window resize
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

//sphere object
// var geometry = new THREE.SphereGeometry(2, 32, 32);
// var material = new THREE.MeshLambertMaterial({ color: 0xe5e5e5 });
// var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

//cube object
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0x00ffff });
var cube = new THREE.Mesh(geometry, material);
cube.position.x = 2;

scene.add(cube);

//light
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 0, 25);
scene.add(light);

//render scene
var render = function () {
    requestAnimationFrame(render);

    //infintite rotation
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();

this.tl = new TimelineMax().delay(0.3);
this.tl.to(this.cube.scale, 1, { x: 2, ease: Expo.easeOut });
