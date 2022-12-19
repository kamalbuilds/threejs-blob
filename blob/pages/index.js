import { Canvas } from "@react-three/fiber";
import Blob from "../components/Blob";

export default function Home() {
  return (
    <div className="container">
      <h1>Kamal here is what u made</h1>
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        
        <Blob />
      </Canvas>
    </div>
  );
}