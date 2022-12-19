import React, { useRef } from "react";
import { useMemo } from "react";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";
import { useFrame } from "@react-three/fiber";
import {MathUtils} from "three";

const Blob = () => {
// reference for mesh
  const mesh = useRef();
  const hover= useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, 0, 0]}
    >
{/* Mesh - Geometry + Material */}
 {/* Geometry */}
      <icosahedronBufferGeometry args={[1, 100]} />
{/* Material */}

      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;