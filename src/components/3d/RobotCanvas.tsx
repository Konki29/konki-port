import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import { EffectComposer, Glitch, Noise, Scanline } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────
   WiredMesh — A single wireframe layer with its own rotation
   ───────────────────────────────────────────────────────── */
function WiredLayer({
    detail,
    radius,
    color,
    opacity,
    rotationOffset,
}: {
    detail: number;
    radius: number;
    color: string;
    opacity: number;
    rotationOffset: [number, number, number];
}) {
    const ref = useRef<THREE.Mesh>(null);

    // Apply initial rotation offset
    useMemo(() => {
        // Will be set in the first frame
    }, []);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.elapsedTime;

        // Erratic rotation — mix of sine waves at different frequencies
        ref.current.rotation.x =
            rotationOffset[0] +
            Math.sin(t * 0.3) * 0.4 +
            Math.sin(t * 1.7) * 0.08;
        ref.current.rotation.y =
            rotationOffset[1] +
            t * 0.15 +
            Math.sin(t * 0.7) * 0.2;
        ref.current.rotation.z =
            rotationOffset[2] +
            Math.cos(t * 0.5) * 0.1;
    });

    return (
        <mesh ref={ref}>
            <icosahedronGeometry args={[radius, detail]} />
            <meshBasicMaterial
                wireframe
                color={color}
                transparent
                opacity={opacity}
                depthWrite={false}
            />
        </mesh>
    );
}

/* ─────────────────────────────────────────────────────────
   WiredConstruct — The core multi-layer object
   ───────────────────────────────────────────────────────── */
function WiredConstruct({ scrollScale }: { scrollScale: number }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;

        // Mouse tracking — slow, drifting follow
        const mx = (state.mouse.x * Math.PI) / 5;
        const my = (state.mouse.y * Math.PI) / 5;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            my * 0.3,
            0.03
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            mx * 0.3,
            0.03
        );

        // Digital pulsation — irregular scale breathing
        const pulse =
            1 +
            Math.sin(t * 2.1) * 0.015 +
            Math.sin(t * 5.3) * 0.008 +
            Math.sin(t * 13.7) * 0.003;
        const s = scrollScale * pulse;
        groupRef.current.scale.set(s, s, s);
    });

    return (
        <group ref={groupRef}>
            {/* Layer 1 — Outer shell, low detail, most transparent */}
            <WiredLayer
                detail={0}
                radius={2.0}
                color="#555555"
                opacity={0.12}
                rotationOffset={[0, 0, 0]}
            />

            {/* Layer 2 — Mid shell, medium detail */}
            <WiredLayer
                detail={1}
                radius={1.6}
                color="#888888"
                opacity={0.18}
                rotationOffset={[0.4, 0.8, 0.2]}
            />

            {/* Layer 3 — Inner core, high detail, brighter */}
            <WiredLayer
                detail={2}
                radius={1.2}
                color="#aaaaaa"
                opacity={0.28}
                rotationOffset={[1.2, 0.3, 0.7]}
            />

            {/* Layer 4 — Ghost echo, very faint */}
            <WiredLayer
                detail={3}
                radius={1.0}
                color="#c0c0c0"
                opacity={0.08}
                rotationOffset={[2.1, 1.5, 0.9]}
            />
        </group>
    );
}

/* ─────────────────────────────────────────────────────────
   RobotCanvas — Main export
   ───────────────────────────────────────────────────────── */
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
                <PerspectiveCamera makeDefault position={[0, 0, 5.5]} />

                {/* Minimal cold lighting */}
                <ambientLight intensity={0.08} color="#8899bb" />

                <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                    <WiredConstruct scrollScale={scrollScale} />
                </Float>

                <OrbitControls enableZoom={false} enablePan={false} />

                {/* ── Post-processing: Lain CRT aesthetic ── */}
                <EffectComposer>
                    <Glitch
                        delay={new THREE.Vector2(2.5, 6.0)}
                        duration={new THREE.Vector2(0.1, 0.4)}
                        strength={new THREE.Vector2(0.05, 0.15)}
                        mode={GlitchMode.SPORADIC}
                        active
                        ratio={0.85}
                    />
                    <Noise opacity={0.06} />
                    <Scanline density={1.2} opacity={0.08} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
