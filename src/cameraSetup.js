import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

function cameraSetup(){
    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.rotation.y = 45/180*Math.PI
    camera.position.x = 5
    camera.position.y = 0.5
    camera.position.z = 5

    return camera
}

export default cameraSetup;