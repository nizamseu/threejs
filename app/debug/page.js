"use client";
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import dynamic from 'next/dynamic';
import { Stats } from '@react-three/drei';
const Perf = dynamic(
    () => import('r3f-perf').then((mod) => mod.Perf),
    { ssr: false }
);

function Scene() {
    const meshRef = useRef()
    const sphereRef = useRef()
    const cubeRef = useRef()


    const { position, color, visible, wireframe } = useControls({
        position: { value: { x: 2.1, y: 0, }, step: 0.1, joystick: "invertY" },
        color: "blue",
        visible: true,
        wireframe: false,
        // positionZ: { value: 0, min: -5, max: 5, step: 0.1 },
    })

    useFrame((state, delta) => {
        // console.log("state", state.camera);

        // meshRef.current.rotation.x += delta
        // meshRef.current.rotation.y += delta


    });

    return (
        <>

            <directionalLight position={[1, 2, 3]} intensity={5.5} />
            <ambientLight intensity={1.5} />
            {/* <axesHelper args={[5]} /> */}

            <mesh visible={visible} ref={meshRef} position={[position.x, position.y, 0]} scale={1}  >
                <boxGeometry />
                <meshStandardMaterial color={color} opacity={1.15}
                    wireframe={wireframe}
                />
            </mesh>


            <mesh position={[0, 0, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color="orange" opacity={0.9} />

            </mesh>



            <mesh position-y={-1} rotation-x={-Math.PI * .5} scale={[10, 10, 10]}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />

            </mesh>

            <OrbitControls makeDefault />
        </>
    );
}

export default function Home() {
    const perfVisible = useControls("perfVisible", {
        visible: true
    })
    return (
        <div className="w-screen h-screen">
            <Canvas>
                {perfVisible?.visible ? <Perf position="bottom-right" /> : null}
                <Stats className="!top-20 !left-4" />
                <Scene />
            </Canvas>
        </div>
    );
}
