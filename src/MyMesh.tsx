import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Size } from './App';

interface MyMeshProps {
  size: Size;
  updateRequire: (requireUpdate: boolean) => void;
}

const FULL_RELATIVE_SIZE = 100;

function getVertices(meshWidth: number): Float32Array {
  return new Float32Array([
    -meshWidth,
    -1,
    -1, // 0: Bottom-left-back
    meshWidth,
    -1,
    -1, // 1: Bottom-right-back
    meshWidth,
    1,
    -1, // 2: Top-right-back
    -meshWidth,
    1,
    -1, // 3: Top-left-back
    -meshWidth,
    -1,
    1, // 4: Bottom-left-front
    meshWidth,
    -1,
    1, // 5: Bottom-right-front
    meshWidth,
    1,
    1, // 6: Top-right-front
    -meshWidth,
    1,
    1, // 7: Top-left-front
  ]);
}

export const MyMesh: React.FC<MyMeshProps> = ({ size, updateRequire }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;

    if (size.requireUpdate) {
      const meshWidth = size.width / FULL_WIDTH;
      const pos = meshRef.current.geometry.getAttribute('position');
      getVertices(meshWidth).forEach((vertix, i) => {
        pos['array'][i] = vertix;
      });
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      updateRequire(false);
    }
  });

  const vertices = useMemo(() => {
    const meshWidth = size.width / FULL_WIDTH;
    console.log(meshWidth);
    return getVertices(meshWidth);
  }, [size]);

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

  return (
    <>
      <mesh ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute array={vertices} attach="attributes-position" itemSize={3} />
          <bufferAttribute array={indices} attach="index" count={indices.length} />
          <meshBasicMaterial side={THREE.DoubleSide} />
        </bufferGeometry>
      </mesh>
    </>
  );
};
