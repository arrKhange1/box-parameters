import { FULL_RELATIVE_SIZE } from '../constants/parameters.constant';

export function getVertices(width: number, height: number, depth: number): Float32Array {
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
