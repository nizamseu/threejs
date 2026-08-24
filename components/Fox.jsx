"use client"
import React, { useEffect } from 'react'
import { useGLTF, Clone, useAnimations } from '@react-three/drei';
import { useControls } from 'leva';

export default function Fox() {
    const fox = useGLTF('/model/Fox/glTf/Fox.gltf')
    console.log("fox", fox);
    const animation = useAnimations(fox.animations, fox.scene)
    const { animationname, } = useControls({
        animationname: { options: animation.names }
    })
    console.log("animation", animation);

    useEffect(() => {
        const action = animation.actions[animationname]
        action.reset().fadeIn(0.5).play()
        // window.setTimeout(() => {
        //     animation.actions.Walk.play()
        //     animation.actions.Walk.crossFadeFrom(animation.actions.Run, 1)
        // }, 5000);

        return () => {
            action.fadeOut(0.5)
        }
    }, [animationname])

    return (
        <>
            <primitive object={fox.scene} scale={0.02} position={[-1.5, 0, 1.5]} rotation-y={0.3} />

        </>
    )
}


useGLTF.preload('/model/Fox/glTf/Fox.gltf')
