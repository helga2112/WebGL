import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

function addSceneLights(scene ){
    const hLight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hLight);
  
    const dLight = new THREE.DirectionalLight(0xffffff, 100)
    dLight.position.set(0,1,0)
    dLight.castShadow = true
    scene.add(dLight);
}

export default addSceneLights;