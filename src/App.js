import { useEffect, useState, CSSProperties } from "react";
import './index.css';
import Modal from 'react-modal';
import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";


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
        <div className="modalContent">
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        
          {
            loading ?
              <PuffLoader color={color} loading={loading} cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader"/>
              :
              <img src="https://images.unsplash.com/photo-1669051759318-e3f68b839d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80"></img>
          }
        
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
         
        </form> */}
        </div>
      </Modal>
    </div>
  );
}

export default App;
