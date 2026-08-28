"use client";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { OrbitControls, Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { useControls } from 'leva';
import dynamic from 'next/dynamic';
import * as THREE from 'three'
import { Suspense, useState } from 'react';


const Perf = dynamic(
    () => import('r3f-perf').then((mod) => mod.Perf),
    { ssr: false }
);



function Scene() {
    const [torusGeo, setTorusGeo] = useState(null)
    const [matcapTexture] = useMatcapTexture("713A28_A87661_3A160D_9B6454", 256)
    console.log(matcapTexture);

    return (
        <>
            <OrbitControls makeDefault />
            {/* <mesh scale={1.5} position={[-2.5, 0, 0]}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh> */}
            <torusGeometry ref={setTorusGeo} args={[1, 0.6, 16, 32]} />
            <Suspense fallback={null}>
                <Center >
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
                        <meshMatcapMaterial matcap={matcapTexture} />
                    </Text3D>
                </Center>
            </Suspense>
            {[...Array(100)].map((_, i) => (
                <mesh key={i}
                    position={[
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                    ]}
                    scale={0.2 + Math.random() * 0.2}
                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0
                    ]}
                    geometry={torusGeo}
                >

                    <meshMatcapMaterial matcap={matcapTexture} />
                </mesh>
            ))}

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
