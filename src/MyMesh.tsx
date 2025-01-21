import { useFrame } from '@react-three/fiber';
import React, { forwardRef, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Size } from './App';

interface MyMeshProps {}

const FULL_RELATIVE_SIZE = 100;

function getVertices(width: number, height: number, depth: number): Float32Array {
  const meshWidth = width / FULL_RELATIVE_SIZE;
  const meshHeight = height / FULL_RELATIVE_SIZE;
  const meshDepth = depth / FULL_RELATIVE_SIZE;
  return new Float32Array([
    -meshWidth,
    -meshHeight,
    -meshDepth, // 0: Bottom-left-back
    meshWidth,
    -meshHeight,
    -meshDepth, // 1: Bottom-right-back
    meshWidth,
    meshHeight,
    -meshDepth, // 2: Top-right-back
    -meshWidth,
    meshHeight,
    -meshDepth, // 3: Top-left-back
    -meshWidth,
    -meshHeight,
    meshDepth, // 4: Bottom-left-front
    meshWidth,
    -meshHeight,
    meshDepth, // 5: Bottom-right-front
    meshWidth,
    meshHeight,
    meshDepth, // 6: Top-right-front
    -meshWidth,
    meshHeight,
    meshDepth, // 7: Top-left-front
  ]);
}

export const MyMesh = forwardRef<THREE.Mesh, MyMeshProps>((props, meshRef) => {
  //   useFrame((state, delta) => {
  //     if (size.requireUpdate) {
  //       const pos = meshRef.current.geometry.getAttribute('position');
  //       getVertices(size.width, size.height, size.depth).forEach((vertix, i) => {
  //         pos['array'][i] = vertix;
  //       });
  //       meshRef.current.geometry.attributes.position.needsUpdate = true;
  //       updateRequire(false);
  //     }
  //   });

  // const vertices = useMemo(() => {
  //   return getVertices(size.width, size.height, size.depth);
  // }, [size]);

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
          <bufferAttribute array={getVertices(100, 100, 100)} attach="attributes-position" itemSize={3} />
          <bufferAttribute array={indices} attach="index" count={indices.length} />
        </bufferGeometry>
        <meshStandardMaterial side={THREE.DoubleSide} />
      </mesh>
    </>
  );
});
