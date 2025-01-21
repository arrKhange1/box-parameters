import { Canvas, extend } from '@react-three/fiber';
import cls from './App.module.css';
import { MyMesh } from './MyMesh';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ParametersForm } from './ParametersForm';
import * as THREE from 'three';

export type Size = {
  width: number;
  height: number;
  depth: number;
  requireUpdate: boolean;
};

function App() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  return (
    <div className={cls.canvasContainer}>
      <ParametersForm ref={meshRef} />
      <Canvas>
        <OrbitControls />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <MyMesh ref={meshRef} />
      </Canvas>
    </div>
  );
}

export default App;
