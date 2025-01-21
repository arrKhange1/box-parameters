import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';

function App() {
  return (
    <div className={cls.canvasContainer}>
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </div>
  );
}

export default App;
