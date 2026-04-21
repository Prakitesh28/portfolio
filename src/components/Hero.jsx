import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function ShieldModel() {
  const group = useRef();
  const [outerGeometry, innerGeometry, crestGeometry] = useMemo(() => {
    const outerShape = new THREE.Shape();
    outerShape.moveTo(0, 3.2);
    outerShape.lineTo(3.6, 2.1);
    outerShape.lineTo(2.8, -1.9);
    outerShape.lineTo(0, -3.2);
    outerShape.lineTo(-2.8, -1.9);
    outerShape.lineTo(-3.6, 2.1);
    outerShape.closePath();

    const innerShape = new THREE.Shape();
    innerShape.moveTo(0, 2.7);
    innerShape.lineTo(3.0, 1.8);
    innerShape.lineTo(2.35, -1.55);
    innerShape.lineTo(0, -2.7);
    innerShape.lineTo(-2.35, -1.55);
    innerShape.lineTo(-3.0, 1.8);
    innerShape.closePath();

    const crestShape = new THREE.Shape();
    crestShape.moveTo(-1.8, 1.2);
    crestShape.bezierCurveTo(-1.1, 2.0, 0.6, 1.95, 1.6, 1.6);
    crestShape.bezierCurveTo(2.1, 1.35, 2.2, 0.8, 1.75, 0.52);
    crestShape.bezierCurveTo(1.2, 0.18, 0.2, 0.5, -0.55, 0.37);
    crestShape.bezierCurveTo(-1.1, 0.26, -1.05, -0.18, -0.55, -0.38);
    crestShape.bezierCurveTo(0.25, -0.7, 1.65, -0.43, 2.15, -0.95);
    crestShape.bezierCurveTo(2.5, -1.35, 2.08, -1.9, 1.35, -2.15);
    crestShape.bezierCurveTo(0.2, -2.55, -1.45, -2.28, -2.2, -1.62);
    crestShape.lineTo(-1.95, -0.9);
    crestShape.bezierCurveTo(-1.35, -1.28, -0.6, -1.35, 0.15, -1.26);
    crestShape.bezierCurveTo(0.8, -1.16, 0.98, -0.82, 0.52, -0.62);
    crestShape.bezierCurveTo(-0.08, -0.38, -1.35, -0.58, -2.05, -0.05);
    crestShape.bezierCurveTo(-2.52, 0.3, -2.4, 0.93, -1.8, 1.2);
    crestShape.closePath();

    const outer = new THREE.ExtrudeGeometry(outerShape, {
      depth: 0.28,
      bevelEnabled: true,
      bevelSize: 0.08,
      bevelThickness: 0.07
    });
    const inner = new THREE.ExtrudeGeometry(innerShape, {
      depth: 0.24,
      bevelEnabled: true,
      bevelSize: 0.06,
      bevelThickness: 0.05
    });
    const crest = new THREE.ExtrudeGeometry(crestShape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelSize: 0.03,
      bevelThickness: 0.03
    });
    return [outer, inner, crest];
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.55;
    group.current.rotation.x = Math.sin(performance.now() * 0.0013) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh geometry={outerGeometry} position={[0, 0, -0.08]}>
        <meshStandardMaterial color="#f1c40f" emissive="#8b6b00" metalness={0.45} roughness={0.25} />
      </mesh>
      <mesh geometry={innerGeometry} position={[0, 0, 0.02]}>
        <meshStandardMaterial color="#c0392b" emissive="#8a0f0f" metalness={0.35} roughness={0.32} />
      </mesh>
      <mesh geometry={crestGeometry} position={[0, 0.05, 0.26]}>
        <meshStandardMaterial color="#f8de5a" emissive="#b98400" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function Hero() {
  const fullText = "PRAKITESH BAKSHI";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      idx += 1;
      setTyped(fullText.slice(0, idx));
      if (idx >= fullText.length) {
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, []);

  const rays = useMemo(() => [12, -16, 34, -36, 58, -58], []);

  return (
    <section className="hero section">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {typed}
        </motion.h1>
        <h2>B.Tech CSBS, IEM Kolkata</h2>
        <p className="meta">
          Building AI-powered products with cinematic ambition and production-focused
          engineering.
        </p>
        <p className="tagline">"Faster than a debugging session."</p>
      </div>

      <div className="shield-wrap">
        <div className="god-rays" aria-hidden="true">
          {rays.map((deg) => (
            <div key={deg} className="ray" style={{ transform: `rotate(${deg}deg)` }} />
          ))}
        </div>
        <div className="shield-canvas" role="img" aria-label="Rotating 3D Superman shield">
          <Canvas camera={{ position: [0, 0, 8], fov: 42 }} dpr={[1, 2]}>
            <ambientLight intensity={0.55} />
            <directionalLight position={[4, 5, 4]} intensity={1.2} color="#f1c40f" />
            <pointLight position={[0, 0.3, 3]} intensity={1.6} color="#ff3b2f" />
            <pointLight position={[-3, -1, 2]} intensity={1.1} color="#c0392b" />
            <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
              <ShieldModel />
            </Float>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
