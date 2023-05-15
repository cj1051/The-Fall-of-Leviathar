import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

async function loadBirds() {

  const loader = new GLTFLoader();
;

  console.log("Cheguei até aqui");

  let url = new URL("../../../public/assets/Parrot.glb", import.meta.url);
//   let url = new URL("../../../public/assets/Futuristic city.glb", import.meta.url);
  url = url = "" + url;

  console.log(url);

  //   let parrotModel = new THREE.Object3D();

  const parrotData = await loader.loadAsync(url, function (gltf) {
    parrotModel = gltf.scene;
  });

  console.log("Squaaawk!", parrotData);

  //   const parrot = setupModel(parrotData);
  //   parrot.position.set(0, 0, 2.5);

  return {
    parrotData,
  };
}

export { loadBirds };
