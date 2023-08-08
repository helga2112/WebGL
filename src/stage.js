import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import pointLights  from "./pointLights.js";

const rangeRover2018 = "models/car/RRS.glb";
const porsche911 = "models/car1/scene.gltf";

function setup() {
  console.log(">>>> setup");
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
   camera.rotation.y = 45/180*Math.PI
   camera.position.x = 5
   camera.position.y = 0.5
   camera.position.z = 5

   
  const hLight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hLight);

  const dLight = new THREE.DirectionalLight(0xffffff, 100)
  dLight.position.set(0,1,0)
  dLight.castShadow = true
  scene.add(dLight);

  pointLights(scene)

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', renderer)


  let loader = new GLTFLoader();

  try {
    loader.load(porsche911, function (gltf) {
      console.log("LOADED");
      const car = gltf.scene.children[0]
      car.scale.set(0.5,0.5, 0.5)
      scene.add(gltf.scene);
      //renderer.render(scene, camera);
      animate()
    });
  } catch (e) {
    console.log("Load error", e);
  }


  function animate(){
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
}

export default setup;
