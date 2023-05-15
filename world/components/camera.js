import { PerspectiveCamera } from "three";

function createCamera() {
  //camera creation
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //camera position

  camera.position.set(-30, 30, 120);

  return camera;
}

export { createCamera };
