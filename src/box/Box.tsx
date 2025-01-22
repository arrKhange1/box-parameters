import { forwardRef } from 'react';
import * as THREE from 'three';
import { getVertices } from '../helper/getVertices';
import { defaultParameters } from '../constants/parameters.constant';

interface BoxProps {}

const indices = new Uint32Array([
  // Back face
  0, 1, 2, 2, 3, 0,
  // Front face
  4, 5, 6, 6, 7, 4,
  // Top face
  3, 2, 6, 6, 7, 3,
  // Bottom face
  0, 1, 5, 5, 4, 0,
  // Right face
  1, 2, 6, 6, 5, 1,
  // Left face
  0, 3, 7, 7, 4, 0,
]);

export const Box = forwardRef<THREE.Mesh, BoxProps>((_, meshRef) => {
  return (
    <>
      <mesh ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            array={getVertices(defaultParameters.width, defaultParameters.height, defaultParameters.depth)}
            attach="attributes-position"
            itemSize={3}
          />
          <bufferAttribute array={indices} attach="index" count={indices.length} />
        </bufferGeometry>
        <meshStandardMaterial side={THREE.DoubleSide} color={'orange'} />
      </mesh>
    </>
  );
});
