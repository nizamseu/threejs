"use client";
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Float, OrbitControls, TransformControls, PivotControls, Html, Text, MeshReflectorMaterial } from '@react-three/drei';
function Scene() {
  const meshRef = useRef()
  const sphereRef = useRef()
  const cubeRef = useRef()


  useFrame((state, delta) => {
    console.log("state", state.camera);

    // meshRef.current.rotation.x += delta
    // meshRef.current.rotation.y += delta


  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={5.5} />
      <ambientLight intensity={1.5} />
      <axesHelper args={[5]} />

      <mesh ref={meshRef} position={[2, 0, 3]} scale={1} >
        <boxGeometry />
        <meshStandardMaterial color="blue" opacity={1.15}
        //  wireframe
        />
      </mesh>
      <TransformControls object={meshRef} />


      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        scale={100}
        fixed={true}
      >

        <mesh position={[0, 0, 0]} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" opacity={0.9} />
          <Html
            position={[1, 1, 0]}
            center
            distanceFactor={5}
            occlude={[sphereRef, meshRef]}
          >
            Nizam Uddin
          </Html>
        </mesh>
      </PivotControls>

      {/* <mesh>
        <torusKnotGeometry  />
        <meshBasicMaterial color="red" wireframe />
      </mesh> */}
      <mesh position-y={-1} rotation-x={-Math.PI * .5} scale={[10, 10, 10]}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial color="greenyellow" resolution={1024} mirror={.25} blur={[10000, 10000]} mixBlur={1} />
      </mesh>
      <Float
        speed={10}
      ><Text
        color={"red"}
        fontSize={2}
        position-y={3}
        maxWidth={2}
        textAlign='center'

      >Nizam Uddin  </Text></Float>
      <OrbitControls makeDefault />
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
