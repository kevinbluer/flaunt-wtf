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

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

const ipfsClient = require("ipfs-http-client");

const Gallery = ({contract, walletDetected}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [svg, setSvg] = useState();

  const { id } = useParams()

  const sanitize = (url) => {
    const cidV0 = url.replace('/ipfs', '').replace('ipfs://', '');
    const cidV1 = new ipfsClient.CID(cidV0).toV1();
    return `https://${cidV1}.ipfs.dweb.link/`;
  }

  const load = async () => {
    
    const metadataUri = await contract.tokenURI(id)

    console.log(metadataUri)

    const santizedMetadataUri = sanitize(metadataUri)
    const res = await fetch(santizedMetadataUri);
    const metadata = await res.json();

    const santizedSvgUri = sanitize(metadata.image)

    setSvg(santizedSvgUri)
    setTitle(metadata.name)
    setDescription(metadata.description)
  }

  useEffect(() => {
    // if (walletDetected) {
      load()
    // }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
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

export default Gallery;
