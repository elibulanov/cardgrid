import React, { useEffect, useState, useRef, CSSProperties } from "react";
import './index.css';
import Modal from 'react-modal';
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import PuffLoader from "react-spinners/PuffLoader";
import * as THREE from 'three'
import { Suspense, useLayoutEffect } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, MeshReflectorMaterial, Environment, Stage, PresentationControls } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./park.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.02} />
    </>
  );
};


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 5000)
  })

  function openModal() {
    setIsOpen(true);
    console.log("test")
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [cards] = useState([
    {
      title: 'Card 1',
      text: "some text some text some text some text some text some ",
    },
    {
      title: 'Card 2',
      text: "some text some text some text some text some text some ",
    },
    {
      title: 'Card 3',
      text: "some text some text some text some text some text some ",
    },
    {
      title: 'Card 4',
      text: "some text some text some text some text some text some ",
    },
    {
      title: 'Card 5',
      text: "some text some text some text some text some text some ",
    },
    {
      title: 'Card 6',
      text: "some text some text some text some text some text some ",
    },
  ])



  return (
    <div>
      <section>
        <div className="container">
          <h1></h1>
          <div className="cards">
            {
              cards.map((card, i) => (
                <div className="card">
                  <h3>
                    {card.title}
                  </h3>
                  <p>
                    Skate Park details
                  </p>


                  <button className="btn" onClick={openModal}>Explore</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}

        ariaHideApp={false}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <div className="modalContent">
          <h2>Skatepark</h2>
          <button onClick={closeModal}>close</button>
          <Canvas>
            <Suspense fallback={null}>
              <Model />
              <OrbitControls />
              <Environment preset="sunset" background={false} />
            </Suspense>
          </Canvas>
        </div>
      </Modal>
    </div>
  );
}

export default App;
