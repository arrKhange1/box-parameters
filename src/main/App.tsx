import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';
import { getVertices, MyMesh } from '../MyMesh';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ParametersForm } from '../parameters-form/ParametersForm';
import * as THREE from 'three';

function App() {
  const meshRef = useRef<THREE.Mesh>(null);

  function onParametersFilled(form: ParametersForm) {
    console.log(form);
    if (meshRef.current) {
      const pos = meshRef.current.geometry.getAttribute('position'); // camera pos z changes when mesh z changes
      getVertices(form.width, form.height, form.depth).forEach((vertex, i) => {
        pos['array'][i] = vertex;
      });
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }

  return (
    <div className={cls.canvasContainer}>
      <ParametersForm onParametersFilled={onParametersFilled} />
      <Canvas className={cls.canvas}>
        <axesHelper args={[5]} />
        <OrbitControls />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <MyMesh ref={meshRef} />
      </Canvas>
    </div>
  );
}

export default App;
