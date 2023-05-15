import { Scene,Color } from "three";

function createScene() {
    //camera creation
    const scene = new Scene();
    scene.background = new Color('skyblue');
  
    return scene;
  }
  
  export { createScene};