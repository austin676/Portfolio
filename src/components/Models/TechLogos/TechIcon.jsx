import React from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);
  return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />

        <Environment preset='city' />
        <Float speed={5.5} rotationIntensity={1} floatIntensity={0.8}>
            <group scale={model.scale}>
                <primitive object={scene.scene} />
            </group>
        </Float>
      </Canvas>
  )
}

export default TechIcon