//import systems
import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { Resizer } from "./systems/resizer";

//import components
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { loadBirds } from "./components/birds/birds";

let camera;
let renderer;
let scene;
let controls;
let loop;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    //scene
    scene = createScene();

    //renderer
    renderer = createRenderer();

    //camera
    camera = createCamera();

    //loop
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    //controls
    controls = createControls(camera, renderer.domElement);
    loop.updatables.push(controls);

    //lights
    const { ambientLight, mainLight } = createLights();
    scene.add(ambientLight, mainLight);

    //resizer
    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    // console.log("Teoricamente tá rodando");
    const parrot = await loadBirds();
    // console.log("Teoricamente tá rodando 2");

    //controls.target.copy(parrot.position);

    scene.add(parrot.parrotData.scene);
  }

  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }

  //Loop functions
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
