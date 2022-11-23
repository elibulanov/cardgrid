import { useState } from "react";
import './index.css';
import Modal from 'react-modal';
import React from 'react';


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


function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
    console.log("test")
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
          <h1>Cards</h1>
          <div className="cards">
            {
              cards.map((card, i) => (
                <div className="card">
                  <h3>
                    {card.title}
                  </h3>
                  <p>
                    some text some text some text some text some text some
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
        onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
