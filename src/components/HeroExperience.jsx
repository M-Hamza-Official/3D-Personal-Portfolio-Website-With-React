import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const HeroExperience = () => {
  return (
    <Canvas camera={{position:[0,0,15],fov:45}}>

<ambientLight intensity={1} color={'#1a1a40'}/>
<directionalLight  position={[5,5,5]} intensity={1} />

<OrbitControls
// enablepan={false}


/>
<mesh>
    <boxGeometry args={[1,1,1]} />
    <meshStandardMaterial  color={'teal'} />
</mesh>
    </Canvas>
  )
}

export default HeroExperience