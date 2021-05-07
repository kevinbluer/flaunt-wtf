import React, { useState, useEffect } from "react";

import { ReactSVG } from 'react-svg'
import styled from 'styled-components';

import {
  useParams
} from "react-router-dom";

import { Button  } from 'react-bulma-components';

const StyledSVG = styled(ReactSVG)`
  width: 60vh;
  height: 60vh;
  margin-bottom: 1rem;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background-color: #e8e8e8;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin: 0.6rem 0.4rem;
  border-radius: 1rem;
  border: 0;
  padding: 0.6rem 1.4rem;
  font-size: 2rem;
  font-family: 'courier';
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  :hover {
    background-color: orange;
    color: white;
  }
`;

const MemeButton = styled.button`
  cursor: pointer;
  margin: 1rem 0.1rem 1rem 0.1rem;
  border: 0;
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  font-family: 'courier';
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  :hover {
    background-color: orange;
    color: white;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

const ipfsClient = require("ipfs-http-client");

const ViewArb = ({contractArbitrum, walletDetected}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [svg, setSvg] = useState();
  const [showBridgeModal, setShowBridgeModal] = useState(false);

  const { id } = useParams()

  const sanitize = (url) => {
    const cidV0 = url.replace('/ipfs', '').replace('ipfs://', '');
    const cidV1 = new ipfsClient.CID(cidV0).toV1();
    return `https://${cidV1}.ipfs.dweb.link/`;
  }

  const load = async () => {
    
    const metadataUri = await contractArbitrum.tokenURI(id)

    const santizedMetadataUri = sanitize(metadataUri)
    const res = await fetch(santizedMetadataUri);
    const metadata = await res.json();

    const santizedSvgUri = sanitize(metadata.image)

    setSvg(santizedSvgUri)
    setTitle(metadata.name)
    setDescription(metadata.description)
  }

  const toggleBridgeModal = () => {
    setShowBridgeModal(showBridgeModal ? false : true)
  }

  useEffect(() => {
      load()
  }, [])

  return (
    <div className="App">
      <div className={`modal ${ showBridgeModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
        <header className="modal-card-head">
          <p className="modal-card-title">bridge to l1</p>
          <button className="delete" aria-label="close" onClick={()=> toggleBridgeModal() }></button>
        </header>
        <section className="modal-card-body">
          <p>withdrawals from arbitrum to l1 take approximately 24 hours</p>
          <MemeButton>initiate withdrawal</MemeButton>
        </section>
        <footer className="modal-card-foot">
        </footer>
        </div>
      </div>

      <header className="App-header">
      <StyledButton onClick={() => { toggleBridgeModal() }}>withdraw</StyledButton>
      <br />
        {
          svg === undefined ?
          (`loading...`) : <StyledSVG src={svg} wrapper="span" />
        }
        <Title>{title}</Title>
        <div>{description}</div>
      </header>
    </div>
  )
};

export default ViewArb;
