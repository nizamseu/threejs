"use client";
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Stage, OrbitControls, Lightformer, Environment, Sky, ContactShadows, RandomizedLight, BakeShadows, SoftShadows, AccumulativeShadows } from '@react-three/drei';
import { useControls } from 'leva';
import dynamic from 'next/dynamic';
import { Stats } from '@react-three/drei';
import * as THREE from 'three'
const Perf = dynamic(
    () => import('r3f-perf').then((mod) => mod.Perf),
    { ssr: false }
);



function Scene() {
    const meshRef = useRef()
    const sphereRef = useRef()
    const cubeRef = useRef()


    const { position, color, visible, wireframe } = useControls("cube", {
        position: { value: { x: 2.1, y: 1, }, step: 0.1, joystick: "invertY" },
        color: "blue",
        visible: true,
        wireframe: false,
        // positionZ: { value: 0, min: -5, max: 5, step: 0.1 },
    })
    const { contactColor, opacity, blur } = useControls("Contact Shadow", {
        contactColor: "#1b4b24",
        opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
        blur: { value: 0, min: 3.7, max: 10, step: 0.1 },
    })
    const { sunPosition, } = useControls("sky", {
        sunPosition: { value: [1, 2, 3] }

    })
    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls("envMap", {
        envMapIntensity: { value: 3.5, min: 0, max: 10, },
        envMapHeight: { value: 7, min: 0, max: 10, },
        envMapRadius: { value: 28, min: 0, max: 1000, },
        envMapScale: { value: 100, min: 0, max: 1000, },
    })

    useFrame((state, delta) => {
        // console.log("state", state.camera);
        const time = state.clock.elapsedTime
        // console.log("time", time);
        if (cubeRef.current) {
            // cubeRef.current.position.x = 2 + Math.sin(time)
            cubeRef.current.rotation.y += delta * 0.5
        }
        // if (sphereRef.current) {
        //     sphereRef.current.position.x = Math.sin(time)
        // }
    });

    return (
        <>
            {/* <Environment
                // background
                preset='sunset'
                ground={
                    {
                        height: envMapHeight,
                        radius: envMapRadius,
                        scale: envMapScale
                    }
                }
         
            > */}

            {/* <color args={['#000000']} attach="background" />
                <Lightformer
                    position-z={-5}
                    scale={15}
                    intensity={10}
                    color="red"
                    form="ring"

                /> */}
            {/* <mesh position-z={-5} scale={10}>
                    <planeGeometry />
                    <meshBasicMaterial color={[10, 12, 0]} />
                </mesh> */}
            {/* </Environment > */}
            {/* <Environment background files={[
                '/environmentMap/2/nx.jpg',
                '/environmentMap/2/ny.jpg',
                '/environmentMap/2/nz.jpg',
                '/environmentMap/2/px.jpg',
                '/environmentMap/2/py.jpg',
                '/environmentMap/2/pz.jpg',

            ]} /> */}
            {/* <BakeShadows /> */}
            {/* <SoftShadows
                frustum={3.75}
                size={50}
                near={9.5}
                samples={17}
                rings={11}

            /> */}
            {/* <color args={['ivory']} attach="background" /> */}
            {/* <AccumulativeShadows
                position={[0, -0.99, 0]}
                scale={10}
                color="#1b4b24"
                opacity={0.8}
                frames={Infinity}
                temporal
                blend={100}
            >
                <RandomizedLight
                    position={[1, 2, 3]}
                    bias={0.001}
                    amount={8}
                    radius={1}
                    intensity={Math.PI}
                    ambient={0.5}

                />
            </AccumulativeShadows> */}

            {/* <ContactShadows
                position={[0, -0.99, 0]}
                scale={10}
                resolution={128}
                far={5}
                color={contactColor}
                opacity={opacity}
                blur={blur}
                frames={1}
            /> */}
            {/* <directionalLight
                castShadow
                position={sunPosition}
                intensity={5.5}
                shadow-mapSize={[2048, 2048]}

                shadow-camera-far={10}
                shadow-camera-near={2}
                shadow-camera-top={5}
                shadow-camera-right={5}
                shadow-camera-bottom={-5}
                shadow-camera-left={-5}
            /> */}
            {/* <ambientLight intensity={1.5} />
            <Sky sunPosition={sunPosition} /> */}
            {/* <axesHelper args={[5]} /> */}

            {/* <mesh castShadow visible={visible} ref={cubeRef} position={[position.x, position.y, 0]} scale={1}  >
                <boxGeometry />
                <meshStandardMaterial color={color} opacity={1.15}
                    wireframe={wireframe}
                />
            </mesh>


            <mesh castShadow ref={sphereRef} position={[-1, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color="orange" opacity={0.9} />

            </mesh> */}



            {/* <mesh
                // receiveShadow
                position-y={0}
                rotation-x={-Math.PI * .5}
                scale={[10, 10, 10]}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />

            </mesh> */}
            <Stage
                ContactShadows={{ opacity: 0.3, blur: 1 }}
                intensity={1}
                shadows="contact"
                enviroment="sunset"
                preset="portrait"
            // adjustCamera={false}
            >


                <mesh castShadow visible={visible} ref={cubeRef} position={[position.x, position.y, 0]} scale={1}  >
                    <boxGeometry />
                    <meshStandardMaterial color={color} opacity={1.15}
                        wireframe={wireframe}
                    />
                </mesh>


                <mesh castShadow ref={sphereRef} position={[-1, 1, 0]} >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" opacity={0.9} />

                </mesh>
            </Stage>
            <OrbitControls makeDefault />
        </>
    );
}


const created = (state) => {
    state.gl.setClearColor("gray", 1)

}
export default function Debug() {
    const perfVisible = useControls("perfVisible", {
        visible: true
    })
    return (
        <div className="w-screen h-screen">
            <Canvas
                shadows={false}
            // onCreated={created}
            >
                {perfVisible?.visible ? <Perf deepAnalyze
                    matrixUpdate position="top-left" /> : null}
                {/* <Stats className="!top-20 !left-4" /> */}
                <Scene />
            </Canvas>
        </div>
    );
}
