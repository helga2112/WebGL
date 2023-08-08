 import setup from "./stage.js"; 

const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("WebGL not supported!");
}

console.log("All is Ok");

setup()