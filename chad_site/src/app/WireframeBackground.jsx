'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function WireframeBackground({
  modelPath,
  modelSize,
  modelPositionX,
  modelPositionY,
  modelPositionZ,
  friction = 0.9,
  baseVelocity = { x: 0.01, y: 0.01 },
  forceFactor = 0.002,
  modelColor = '#ffffff',
  wireframeColor = '#000000',
  wireframeWidth = 1.0,
}) {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const velocityRef = useRef({ x: baseVelocity.x, y: baseVelocity.y });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(modelSize, modelSize, modelSize);
        model.position.set(modelPositionX, modelPositionY, modelPositionZ);

        model.traverse((child) => {
          if (child.isMesh) {
            const geometry = child.geometry;
            const material = new THREE.MeshBasicMaterial({
              color: modelColor,
              wireframe: true,
              wireframeLinewidth: wireframeWidth,
            });
            child.material = material;
          }
        });

        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => {
        console.error('Model load error:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      const model = modelRef.current;
      if (model) {
        const mouse = mouseRef.current;
        const velocity = velocityRef.current;

        const dx = mouse.x - model.rotation.y;
        const dy = mouse.y - model.rotation.x;

        velocity.x += dx * forceFactor;
        velocity.y += dy * forceFactor;

        velocity.x *= friction;
        velocity.y *= friction;

        model.rotation.y += velocity.x;
        model.rotation.x += velocity.y;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
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
    modelColor,
    wireframeColor,
    wireframeWidth,
  ]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -10,
      }}
    />
  );
}

export default WireframeBackground;
