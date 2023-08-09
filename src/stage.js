import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import addSceneLights  from "./addSceneLights.js";
import addPointLights  from "./addPointLights.js";
import cameraSetup  from "./cameraSetup.js";

const rangeRover2018 = "models/car/RRS.glb";
const porsche911 = "models/car1/scene.gltf";
const volvoS90 = "models/volvo_s90/Volvo S90.fbx";  // not working

const Cars = {
  car1: rangeRover2018,
  car2: porsche911,
  car3: volvoS90,
}

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
  controls.enableRotate = false;
  controls.maxDistance = 8;
  controls.minDistance = 5;
  controls.addEventListener('chasnge', renderer)

  let loader = new GLTFLoader();

  try {
    loader.load(Cars.car2, function (gltf) {
      console.log("LOADED");
      const carMesh = gltf.scene.children[0]

      carMesh.scale.set(0.5,0.5, 0.5)
      console.log( carMesh)
      scene.add(gltf.scene);
      renderer.render(scene, camera);
      animate()
    });
  } catch (e) {
    console.log("Load error", e);
  }

  //var renderCalls = [];
  function animate(){
    //console.log('ANIMATE')
   // renderer.render(scene, camera);
    requestAnimationFrame(animate)
    //renderCalls.forEach((callback)=>{ callback(); });
  }
}

export default setup;
