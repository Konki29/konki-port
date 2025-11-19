import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TechOrb(props: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current && materialRef.current) {
            // 1. Rotation: The sphere looks at the mouse
            const x = (state.mouse.x * Math.PI) / 2; // wider range
            const y = (state.mouse.y * Math.PI) / 2;

            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x, 0.1);

            // 2. Distortion: Reacts to mouse distance from center
            // Calculate distance from center (0 to ~1.4)
            const dist = Math.sqrt(state.mouse.x ** 2 + state.mouse.y ** 2);

            // More distortion and speed when mouse is far from center
            const targetDistort = 0.3 + dist * 0.4; // range 0.3 to ~0.8
            const targetSpeed = 2 + dist * 3;       // range 2 to ~6

            materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.05);
            materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, 0.05);
        }
    });

    return (
        <group {...props}>
            {/* Core: Distorted Sphere */}
            <Sphere ref={meshRef} args={[1, 64, 64]}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#333"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Shell: Wireframe Sphere rotating */}
            <WireframeShell />
        </group>
    );
}

function WireframeShell() {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta * 0.2;
            ref.current.rotation.x += delta * 0.1;
        }
    });

    return (
        <Sphere ref={ref} args={[1.5, 32, 32]}>
            <meshStandardMaterial wireframe color="#666" transparent opacity={0.2} />
        </Sphere>
    );
}

export default function RobotCanvas() {
    return (
        <div className="w-full h-64 md:h-80 cursor-pointer">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <TechOrb />
                </Float>

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
