let scene, camera, renderer, ball;

function iniciar3D(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({canvas:document.getElementById("canvas3D")});
  renderer.setSize(window.innerWidth, window.innerHeight);

  /* TEXTURA */
  let texture = new THREE.TextureLoader().load("textura_voley.jpg");

  let geometry = new THREE.SphereGeometry(1,64,64);
  let material = new THREE.MeshStandardMaterial({map:texture});

  ball = new THREE.Mesh(geometry, material);
  scene.add(ball);

  let light = new THREE.PointLight(0xffffff,1);
  light.position.set(5,5,5);
  scene.add(light);

  animate();
}

/* ROTACION CON MOUSE */
let isDragging=false;
let prevX=0;

window.addEventListener("mousedown",(e)=>{
  isDragging=true;
  prevX=e.clientX;
});

window.addEventListener("mouseup",()=>isDragging=false);

window.addEventListener("mousemove",(e)=>{
  if(isDragging){
    let delta = e.clientX - prevX;
    ball.rotation.y += delta * 0.01;
    prevX = e.clientX;
  }
});

/* ANIMACION */
function animate(){
  requestAnimationFrame(animate);
  ball.rotation.x += 0.005;
  renderer.render(scene,camera);
}

/* BOTON TE AMO */
function teAmo(){
  document.getElementById("inicio").style.display="none";
  iniciar3D();
}

/* TRISTE */
function noTeAmo(){
  document.getElementById("inicio").style.display="none";
  document.getElementById("triste").style.display="block";
}