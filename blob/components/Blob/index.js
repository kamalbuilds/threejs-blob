import React, { useRef } from "react";

import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";
// creating a mesh = geo + material
const Blob = () => {
// reference for mesh
  const mesh = useRef();

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, 0, 0]}
    >
{/* Mesh - Geometry + Material */}
 {/* Geometry */}
      <icosahedronBufferGeometry args={[2, 20]} />
{/* Material */}

      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default Blob;