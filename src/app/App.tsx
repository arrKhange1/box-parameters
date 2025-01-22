import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ParametersForm } from '../parameters-form/ParametersForm';
import * as THREE from 'three';
import { Box } from '../box/Box';
import { getVertices } from '../helper/getVertices';

function App() {
  const meshRef = useRef<THREE.Mesh>(null);

  function onParametersFilled(form: ParametersForm) {
    if (meshRef.current) {
      const pos = meshRef.current.geometry.getAttribute('position');
      getVertices(form.width, form.height, form.depth).forEach((vertex, i) => {
        pos['array'][i] = vertex;
      });
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }

  return (
    <div className={cls.canvasContainer}>
      <ParametersForm onParametersFilled={onParametersFilled} />
      <Canvas className={cls.canvas} camera={{ position: [-5, 3, 2] }}>
        <OrbitControls />
        <ambientLight intensity={Math.PI / 2} />
        <Box ref={meshRef} />
      </Canvas>
    </div>
  );
}

export default App;
