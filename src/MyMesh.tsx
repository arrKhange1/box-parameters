import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

interface MyMeshProps {}

export const MyMesh: React.FC<MyMeshProps> = () => {
  const camera = useThree((state) => state.camera);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    console.log(new THREE.Vector3(window.innerWidth, 0, 0).project(camera));
  }, []);

  const vertices = new Float32Array([
    -1,
    -1,
    -1, // 0: Bottom-left-back
    1,
    -1,
    -1, // 1: Bottom-right-back
    1,
    1,
    -1, // 2: Top-right-back
    -1,
    1,
    -1, // 3: Top-left-back
    -1,
    -1,
    1, // 4: Bottom-left-front
    1,
    -1,
    1, // 5: Bottom-right-front
    1,
    1,
    1, // 6: Top-right-front
    -1,
    1,
    1, // 7: Top-left-front
  ]);

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
      <axesHelper args={[1]} />
      <OrbitControls />
      <mesh>
        <bufferGeometry>
          <bufferAttribute array={vertices} attach="attributes-position" itemSize={3} />
          <bufferAttribute array={indices} attach="index" count={indices.length} />
          <meshBasicMaterial side={THREE.DoubleSide} />
        </bufferGeometry>
      </mesh>
    </>
  );
};
