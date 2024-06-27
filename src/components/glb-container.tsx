"use client"

import { PresentationControls, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Model({ url, ...props }: { url: string }) {
  const { scene, animations } = useGLTF(url)

  return <primitive object={scene} {...props}></primitive>
}

export function GLBViewer({ url }: { url: string }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 40 }}
      shadows
      className="animate-scroll overflow-visible direction-alternate"
    >
      <PresentationControls speed={1.5} zoom={0.5} polar={[0, Math.PI / 4]}>
        <Stage environment={"dawn"}>
          <Model url={url} />
        </Stage>
      </PresentationControls>
    </Canvas>
  )
}
