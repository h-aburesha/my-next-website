import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export const MeshComponent: React.FC = () => {
    function get3DUrl(): string {
        return "/shiba/scene.gltf";
    }

    const fileUrl = get3DUrl();
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
};

const Shiba: React.FC = () => {
    return (
        <div>
            <Canvas style={{ height: "100vh", width: "100vw" }}>
                <MeshComponent />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Shiba;
