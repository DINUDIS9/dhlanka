import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from '../components/Scene';

function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-8 bg-black/30 backdrop-blur-sm rounded-xl max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
            Welcome to DH Lanka
          </h1>
          <p className="text-xl text-gray-300">
            Delivering Excellence Across Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;