import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function WireframeHologram({ scrollScale }: { scrollScale: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Slow ambient rotation
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.x += 0.001;

            // Mouse tracking
            const x = (state.mouse.x * Math.PI) / 4;
            const y = (state.mouse.y * Math.PI) / 4;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y * 0.5, 0.05);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5, 0.05);

            // Scroll-based scale
            const targetScale = scrollScale;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.6, 1]} />
            <meshBasicMaterial
                wireframe
                color="#ffb800"
                transparent
                opacity={0.35}
            />
        </mesh>
    );
}

export default function RobotCanvas() {
    const [scrollScale, setScrollScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scale = Math.max(0.85, 1 - (scrollY / 500) * 0.15);
            setScrollScale(scale);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full h-64 md:h-80 cursor-pointer">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.15} />

                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
                    <WireframeHologram scrollScale={scrollScale} />
                </Float>

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
