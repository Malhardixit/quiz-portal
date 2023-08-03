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
  // const { camera } = useThree();
  // const [isDragging, setIsDragging] = useState(false);
  // const prevMouseY = useRef(0);

  // const handleMouseDown = (event) => {
  //   setIsDragging(true);
  //   prevMouseY.current = event.clientY;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseMove = (event) => {
  //   if (isDragging) {
  //     const deltaY = event.clientY - prevMouseY.current;
  //     const newPositionX = camera.position.x - deltaY * 0.01; // Adjust the sensitivity here

  //     // Limit the camera's X position to prevent it from going too far
  //     const maxX = 5;
  //     const minX = -5;
  //     camera.position.x = Math.min(Math.max(newPositionX, minX), maxX);

  //     prevMouseY.current = event.clientY;
  //   }
  // };

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
        style={{ position: 'absolute', borderRadius: '2rem' }}
      >
        <color attach="background" args={['#101010']} />
        
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
