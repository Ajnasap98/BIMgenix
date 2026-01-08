import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import earthTexture from "../assets/GlobeBackground.png"; // ✅ no spaces in file name

function Earth() {
  const texture = useTexture(earthTexture); // ✅ direct import

  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function GlobeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setClearColor("#081a3c"); // dark blue tone
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}


// // src/Components/GlobeBackground.jsx
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useTexture } from "@react-three/drei";

// function Earth() {
//   const texture = useTexture("/assets/Globe Background - BIMgenix.png");

//   if (!texture) return null;

//   return (
//     <mesh rotation={[0.4, 0.2, 0]}>
//       <sphereGeometry args={[2.5, 64, 64]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// }

// export default function GlobeBackground() {
//   return (
//     <div className="absolute inset-0 w-full h-full -z-10">
//       <Canvas
//         camera={{ position: [0, 0, 6], fov: 50 }}
//         style={{
//           background: "linear-gradient(to bottom right, #0a1d3d, #e8f0ff)",
//         }}
//       >
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />

//         <Suspense fallback={null}>
//           <Earth />
//         </Suspense>

//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate
//           autoRotateSpeed={0.6}
//         />
//       </Canvas>
//     </div>
//   );
// }

//Globe Background Previous
// // src/components/BackgroundGlobe.jsx
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars, useTexture } from "@react-three/drei";

// function Earth() {
//   const [earthMap] = useTexture(["/assets/earth-texture.jpg"]); // Place earth-texture.jpg inside src/assets/
//   return (
//     <mesh rotation={[0, 0, 0]}>
//       <sphereGeometry args={[2, 64, 64]} />
//       <meshStandardMaterial map={earthMap} />
//     </mesh>
//   );
// }

// export default function BackgroundGlobe() {
//   return (
//     <div className="absolute inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[3, 2, 2]} intensity={1.2} />
//         <Stars radius={100} depth={50} count={4000} factor={4} fade />
//         <Suspense fallback={null}>
//           <Earth />
//         </Suspense>
//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={0.8}
//           enablePan={false}
//         />
//       </Canvas>
//       {/* Subtle gradient overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-transparent"></div>
//     </div>
//   );
// }
