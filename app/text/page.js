"use client";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { useControls } from 'leva';
import dynamic from 'next/dynamic';
import * as THREE from 'three'
import { Suspense } from 'react';


const Perf = dynamic(
    () => import('r3f-perf').then((mod) => mod.Perf),
    { ssr: false }
);



function Scene() {


    return (
        <>
            <OrbitControls makeDefault />
            <mesh scale={1.5} position={[-2.5, 0, 0]}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
            <Suspense fallback={null}>
                <Center position={[1.5, 0, 0]}>
                    <Text3D
                        font="/fonts/helvetiker_regular.typeface.json"
                        size={0.75}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                    >
                        Hello 3D
                        <meshNormalMaterial />
                    </Text3D>
                </Center>
            </Suspense>

        </>
    );
}



export default function Model() {
    const perfVisible = useControls("perfVisible", {
        visible: true
    })
    return (
        <div className="w-screen h-screen">
            <Canvas
                shadows={false}

            >
                {perfVisible?.visible ? <Perf deepAnalyze
                    matrixUpdate position="top-left" /> : null}

                <Scene />
            </Canvas>
        </div>
    );
}
