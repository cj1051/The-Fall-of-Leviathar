import { World } from '../world/world.js';

console.log("Rodei")

// create the main function
async function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
  
    // create a new world
    const world = new World(container);
  
    // complete async tasks
    await world.init();
  
    // start the animation loop
    world.start();
  }

  main().catch((err) => {
    console.error(err);
  });