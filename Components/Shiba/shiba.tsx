"use client";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/shiba/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

function Shiba() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Canvas style={{ height: "100vh", width: "100vw" }}>
                <MeshComponent />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Shiba;
