import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

function addPointLights(scene ){
    const light = new THREE.PointLight(0xc4c4c4, 10)
    light.position.set(0,300,500)
    scene.add(light)

    const light1 = new THREE.PointLight(0xc4c4c4, 10)
    light.position.set(500,100,0)
    scene.add(light1)

    const light2 = new THREE.PointLight(0xc4c4c4, 10)
    light.position.set(0,100,-500)
    scene.add(light2)

    const light3 = new THREE.PointLight(0xc4c4c4, 10)
    light.position.set(500,300,0)
    scene.add(light3)
}

export default addPointLights;