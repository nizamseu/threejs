"use client";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { OrbitControls, } from '@react-three/drei';
import { useControls } from 'leva';
import dynamic from 'next/dynamic';


import * as THREE from 'three'
import ModelComponent from '@/components/Model';
import { Hamburger } from '@/components/Hamburger';
import Fox from '@/components/Fox';
const Perf = dynamic(
    () => import('r3f-perf').then((mod) => mod.Perf),
    { ssr: false }
);



function Scene() {


    // const model = useLoader(GLTFLoader, '/model/hamburger-draco.glb', (loader) => {
    //     const dracoLoader = new DRACOLoader()
    //     dracoLoader.setDecoderPath('/model/draco/')
    //     loader.setDRACOLoader(dracoLoader)
    // })





    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight
                castShadow
                position={[1, 2, 3]}
                intensity={1.5}

                shadow-normalBias={.04}


            />
            <ambientLight intensity={1.5} />

            <mesh
                receiveShadow
                position-y={0}
                rotation-x={-Math.PI * .5}
                scale={[10, 10, 10]}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />

            </mesh>

            {/* <ModelComponent /> */}
            <Hamburger scale={.3} />
            <Fox />
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
