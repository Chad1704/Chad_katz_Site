'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

function AsciiBackground({
  modelPath,
  modelSize,
  modelPositionX,
  modelPositionY,
  modelPositionZ,
  friction = 0.9,
  baseVelocity = { x: 0.01, y: 0.01 },
  forceFactor = 0.002,
}) {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const velocityRef = useRef({ x: baseVelocity.x, y: baseVelocity.y });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const effect = new AsciiEffect(renderer, ' .,:;i1tfLCG08@', { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = 'grey';
    
    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = 0;
    effect.domElement.style.left = 0;
    effect.domElement.style.zIndex = -1;

    mount.appendChild(effect.domElement);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(modelSize, modelSize, modelSize);
        model.position.set(modelPositionX, modelPositionY, modelPositionZ);
        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => {
        console.error('Model load error:', error);
      }
    );

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    function animate() {
      requestAnimationFrame(animate);

      const model = modelRef.current;
      if (model) {
        const mouse = mouseRef.current;
        const velocity = velocityRef.current;

        // Apply force toward the mouse (small attractive force)
        const dx = mouse.x - model.rotation.y;
        const dy = mouse.y - model.rotation.x;

        velocity.x += dx * forceFactor;
        velocity.y += dy * forceFactor;

        // Apply friction
        velocity.x *= friction;
        velocity.y *= friction;

        // Apply velocity to model rotation
        model.rotation.y += velocity.x;
        model.rotation.x += velocity.y;
      }

      effect.render(scene, camera);
    }

    animate();

    return () => {
      mount.removeChild(effect.domElement);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [
    modelPath,
    modelSize,
    modelPositionX,
    modelPositionY,
    modelPositionZ,
    friction,
    baseVelocity.x,
    baseVelocity.y,
    forceFactor,
  ]);

  return (
    <div
      ref={mountRef}
      style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}
    />
  );
}

export default AsciiBackground;
