/* eslint-disable react/no-unknown-property */
import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

function Model(props) {
  const { scene } = useGLTF('src/public/model.gltf');
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} scale={0.01} {...props} />;
}

function ThreeDQuizView() {
  return (
    <div
      style={{
        position: 'relative',
        width: '30rem',
        height: '20rem',
        borderRadius: '0.8rem',
      }}
    >
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 80 }}
        style={{
          position: 'absolute',
          borderRadius: '2rem',
          backgroundColor: 'transparent',
        }}
      >

        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-3, Math.PI / 5]}
        >
          <Stage>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default ThreeDQuizView;
