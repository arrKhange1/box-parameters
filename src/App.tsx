import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';
import { MyMesh } from './MyMesh';
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';

export type Size = {
  width: number;
  height: number;
  depth: number;
  requireUpdate: boolean;
};

function App() {
  const [size, setSize] = useState<Size>({ width: 100, height: 100, depth: 100, requireUpdate: false });

  return (
    <div className={cls.canvasContainer}>
      <input
        name="width"
        type="text"
        placeholder="Width"
        onChange={(e) => setSize((prev) => ({ ...prev, width: Number(e.target.value), requireUpdate: true }))}
      />
      <input
        name="width"
        type="text"
        placeholder="Height"
        onChange={(e) => setSize((prev) => ({ ...prev, height: Number(e.target.value), requireUpdate: true }))}
      />
      <input
        name="width"
        type="text"
        placeholder="Depth"
        onChange={(e) => setSize((prev) => ({ ...prev, depth: Number(e.target.value), requireUpdate: true }))}
      />
      <span>{size.width}</span>
      <Canvas>
        <OrbitControls />
        <MyMesh size={size} updateRequire={(requireUpdate) => setSize((prev) => ({ ...prev, requireUpdate }))} />
      </Canvas>
    </div>
  );
}

export default App;
