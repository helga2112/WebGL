import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import addSceneLights  from "./addSceneLights.js";
import addPointLights  from "./addPointLights.js";
import cameraSetup  from "./cameraSetup.js";

const rangeRover2018 = "models/car/RRS.glb";
const porsche911 = "models/car1/scene.gltf";

function setup() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  const camera = cameraSetup()

   
  addSceneLights(scene)
  addPointLights(scene)

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
