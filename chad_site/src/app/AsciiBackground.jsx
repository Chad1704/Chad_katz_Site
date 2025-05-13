'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

function AsciiBackground({ modelPath, modelSize, modelPositionX, modelPositionY, modelPositionZ, rotationSpeed }) {
  const mountRef = useRef(null);
  const modelRef = useRef(null); // Use this to keep a reference to the model

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    console.log('Camera initialized');

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const effect = new AsciiEffect(renderer, ' .,:;i1tfLCG08@', { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';
    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = 0;
    effect.domElement.style.left = 0;
    effect.domElement.style.zIndex = -1;
    console.log('AsciiEffect initialized');

    mount.appendChild(effect.domElement);

    const controls = new TrackballControls(camera, effect.domElement);

    const loader = new GLTFLoader();
    loader.load(
      modelPath, // Use the prop for the model path
      function (gltf) {
        console.log('Model loaded:', gltf);
        const model = gltf.scene;
        model.scale.set(modelSize, modelSize, modelSize); // Use the prop for scaling the model
        model.position.set(modelPositionX, modelPositionY, modelPositionZ); // Set the model's position based on the props
        scene.add(model);
        modelRef.current = model; // Store the model in the ref
      },
      function (xhr) {
        console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      function (error) {
        console.error('An error happened while loading the model:', error);
      }
    );

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      // Rotate the model every frame (if the model is loaded)
      if (modelRef.current) {
        modelRef.current.rotation.y += (rotationSpeed*0.01); // Adjust rotation speed as needed
      }

      effect.render(scene, camera);
    }

    animate();
    console.log('Animation loop started');

    return () => {
      mount.removeChild(effect.domElement);
    };
  }, [modelPath, modelSize, modelPositionX, modelPositionY, modelPositionZ]); // Re-run the effect if any of these props change

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }} />;
}

export default AsciiBackground;
