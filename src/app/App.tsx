import { Canvas } from '@react-three/fiber';
import cls from './App.module.css';
import { createContext, useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ParametersForm } from '../parameters-form/ParametersForm';
import * as THREE from 'three';
import { Box } from '../box/Box';
import { getVertices } from '../helper/getVertices';
import clsx from 'clsx';
import { CANVAS_DARK, CANVAS_LIGHT } from '../constants/canvas-light.constant';

export const ThemeContext = createContext<boolean>(true);

function App() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isLight, setIsLight] = useState<boolean>(true);

  function onParametersFilled(form: ParametersForm) {
    if (meshRef.current) {
      const pos = meshRef.current.geometry.getAttribute('position');
      getVertices(form.width, form.height, form.depth).forEach((vertex, i) => {
        pos.array[i] = vertex;
      });
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }

  return (
    <ThemeContext.Provider value={isLight}>
      <div className={cls.canvasContainer}>
        <ParametersForm onParametersFilled={onParametersFilled} />
        <Canvas className={clsx(cls.canvas, { [cls.dark]: !isLight })} camera={{ position: [-5, 3, 2] }}>
          <OrbitControls />
          <ambientLight intensity={isLight ? CANVAS_LIGHT : CANVAS_DARK} />
          <Box ref={meshRef} />
        </Canvas>
        <button style={{ position: 'absolute', top: '1em', right: '1em' }} onClick={() => setIsLight((prev) => !prev)}>
          {isLight ? 'Light' : 'Dark'}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
