import { WebGLRenderer } from "three";

function createRenderer(){
    //renderer creation
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };