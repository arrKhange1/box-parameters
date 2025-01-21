import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';
import { getVertices, MyMesh } from './MyMesh';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ParametersForm } from './ParametersForm';
import * as THREE from 'three';

function App() {
  const meshRef = useRef<THREE.Mesh>(null);

  function onParametersFilled(form: ParametersForm) {
    console.log(form);
    if (meshRef.current) {
      const pos = meshRef.current.geometry.getAttribute('position'); // depth changing leads to changing all dimensions???
      getVertices(form.width, form.height, form.depth).forEach((vertex, i) => {
        pos['array'][i] = vertex;
      });
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }

  return (
    <div className={cls.canvasContainer}>
      <ParametersForm onParametersFilled={onParametersFilled} />
      <Canvas>
        <OrbitControls />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <MyMesh ref={meshRef} />
      </Canvas>
    </div>
  );
}

export default App;
