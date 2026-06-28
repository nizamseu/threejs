"use client";
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls} from '@react-three/drei';
function Scene() {
  const meshRef=useRef()
  useFrame((state, delta) => {
    console.log("state",state);
    
meshRef.current.rotation.x+=delta
meshRef.current.rotation.y+=delta


  });

  return (
    <>
     <axesHelper args={[5]} /> 
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1} >
        <boxGeometry />
        <meshBasicMaterial color="blue" opacity={1.15} wireframe />
      </mesh>
      <mesh  position={[1, 1, 1]}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" opacity={0.9} />
      </mesh>
      {/* <mesh>
        <torusKnotGeometry  />
        <meshBasicMaterial color="red" wireframe />
      </mesh> */}
      <mesh position-y={-1} rotation-x={-Math.PI *.5} scale={[10,10,10]}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow"  />
      </mesh>
      <OrbitControls />
    </>
  );
}

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
