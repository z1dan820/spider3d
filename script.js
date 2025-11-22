// Setup dasar THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// Spiderman Head Wireframe (Sphere saja dulu - versi line art)
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ffff,
  wireframe: true
});
const head = new THREE.Mesh(geometry, material);
scene.add(head);

camera.position.z = 5;

// Animasi berbicara (gerak kecil naik turun)
let talking = false;
function animate() {
  requestAnimationFrame(animate);
  head.rotation.y += 0.01;

  if (talking) {
    head.position.y = Math.sin(Date.now() * 0.005) * 0.2;
  } else {
    head.position.y = 0;
  }

  renderer.render(scene, camera);
}
animate();

// Chat response sederhana
document.getElementById("send-btn").addEventListener("click", function () {
  const input = document.getElementById("user-input").value;
  if (!input) return;

  talking = true;
  document.getElementById("response-output").innerText = "🕷️ Spiderman sedang berpikir...";

  setTimeout(() => {
    document.getElementById("response-output").innerText = "🕷️ Jawaban Spiderman: " + input;
    talking = false;
  }, 2000);
});
