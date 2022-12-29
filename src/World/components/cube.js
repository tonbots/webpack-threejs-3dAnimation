import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";
import uvTexture from "../../../static/textures/tonbots.png";

function createMaterial() {
  //create a texture loader
  const textureLoader = new TextureLoader();

  //loader a texture
  const texture = textureLoader.load(uvTexture);

  //create a 'standar' material using texture
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = createMaterial();
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.scale.set(1, 1, 1);
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export default createCube;
