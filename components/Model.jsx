import React from 'react'
import { useGLTF, Clone } from '@react-three/drei';


export default function ModelComponent() {
    const model = useGLTF('/model/hamburger.glb')
    console.log("model", model);

    return (
        <>
            <Clone object={model.scene} scale={.3} />

        </>
    )
}


useGLTF.preload('/model/hamburger-draco.glb')
