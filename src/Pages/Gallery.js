import React, { useState } from "react";

import { Button  } from 'react-bulma-components';

const Gallery = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  return (
    <div className="App">
      <h2>Gallery</h2>
      <header className="App-header">
        <Button.Group>
          <Button
            color="info"
            onClick={() => toggleModal()}
          >
            Open Card Modal
          </Button>
        </Button.Group>
        <div
          className={`modal ${ modal ? 'is-active' : ''}`}
        >
          <div className="modal-background"></div>
          <div className="modal-content">

          <header className="modal-card-head">
            <p className="modal-card-title">Do stuff</p>
            <button className="delete" aria-label="close" onClick={()=>toggleModal()}></button>
          </header>
          <section className="modal-card-body">
            <div>x</div>
          </section>
          </div>
        </div>
      </header>
    </div>
  )
};

export default Gallery;

