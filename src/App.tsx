import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';
import { MyMesh } from './MyMesh';
import { Vector3 } from 'three';

function App() {
  return (
    <div className={cls.canvasContainer}>
      <Canvas>
        <MyMesh />
      </Canvas>
    </div>
  );
}

export default App;
