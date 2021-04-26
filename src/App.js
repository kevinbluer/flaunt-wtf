import './App.css';

import React, { useRef, useState } from "react";

import axios from 'axios';
import styled from 'styled-components';
import {SketchField, Tools} from 'react-sketch';
import { ethers } from "ethers";
import { 
  Button,
  Content,
  Container,
  Media,
  Modal,
  Image
} from 'react-bulma-components';

import {
  Switch,
  Route,
} from "react-router-dom";

import Navigation from "./Components/Navigation";
import Gallery from "./Pages/Gallery";

import eyes from './Assets/eyes.png';
import shades from './Assets/shades.png';
import doge from './Assets/doge.png';
import joint from './Assets/joint.png';
import troll from './Assets/troll.png';

const fabric = require("fabric").fabric;

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const provider = new ethers.providers.InfuraProvider();

const abi = [
  "function totalSupply() view returns (uint)",
  "function tokenByIndex(uint) view returns (uint)",
  "function tokenURI(uint) view returns (string)",
  "function uri(uint) view returns (string)"
];

// const contract = new ethers.Contract("0x", abi, provider);

const StyledSketchField = styled(SketchField)`
  border: 0.2rem #fff dashed;
  background-color: #576071;
`;

const StyledButton = styled.button`
  margin: 1rem 0.4rem;
  border: solid 1px orange;
  border-radius: 1rem;
  padding: 0.6rem 1.4rem;
  font-size: 2rem;

  :hover {
    background-color: orange;
    color: white;
  }
`;

const MemeButton = styled.button`
  margin: 0 0.2rem 0.4rem 0.2rem;
  border: solid 1px orange;
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 1rem;

  :hover {
    background-color: orange;
    color: white;
  }
`;

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [tool, setTool] = useState(Tools.Select);

  const _sketch = useRef();

  const thugify = () => {
    _sketch.current.addImg(shades)
    _sketch.current.addImg(joint)
  }

  const dogeify = () => {
    _sketch.current.addImg(doge)
  }

  const laserify = () => {
    _sketch.current.addImg(eyes)
  }

  const trollify = () => {
    _sketch.current.addImg(troll)
  }

  const select = () => {
    setTool(Tools.Select)
  }

  const pen = () => {
    setTool(Tools.Pencil)
  }

  const text = async () => {
    _sketch.current.addText('SCALING', {
      "fontFamily": "Impact",
      "fill": "#fff",
      "stroke": "#000",
      "strokeWidth": "1"
    });
    setTool(Tools.Select)
  }

  const remove = async () => {
    _sketch.current.removeSelected();
  }

  const load = async () => {    

    // const url = "https://bafybeibfwqxsjs3xzn4txvxllghxevj6gmn3m6jrszpnyda6n5qdt3lidy.ipfs.dweb.link/image.gif";
    // const url = "https://bafybeid5o4fkfgq62uvzuh24sgoo6jj2nir7ggk4o5rhwqb4sfr4wgbfku.ipfs.dweb.link/nft.jpg";

    const url = "https://bafybeibhg2ik63dnkb3el4nlh5qry3lnhfok3nh3csywi6joedv25kh77i.ipfs.dweb.link/image.png";

    const response = await axios.get(url, { responseType: 'blob' }); 
    const reader = new FileReader();
    reader.readAsDataURL(response.data); 
    reader.onload = async () => {
      fabric.Image.fromURL(reader.result, function(oImg) {
        oImg.scaleToWidth(640);
        _sketch.current.setBackgroundFromDataUrl(oImg.toDataURL(), {
            stretched: true,
            originX: "left",
            originY: "top",
          }); 
      });
    }
  }

  const save = async () => {
    const reader = new FileReader()
    reader.onloadend = async function () {
      const fileContents = `<svg xmlns="http://www.w3.org/2000/svg"><image href="${reader.result}" /></svg>`;
      const ipfsImg = await ipfs.add(fileContents);
      setImageUrl(`ipfs://${ipfsImg}`);

      // TODO - load the title / description from fields (prepopulate from what's loaded)
      const metadata = `{ "name":"Flaunt", "description":"","image":"ipfs://${ipfsImg}" }`

      const ipfsMetadata = await ipfs.add(metadata);
      
      // TODO use this CID when minting
      console.log(ipfsMetadata);
      
    }
    const canvas = _sketch.current.toDataURL();
    const blob = await (await fetch(canvas)).blob();
    reader.readAsDataURL(blob);
  }

  const mint = () => {
    const img = _sketch.current.toDataURL()
    ipfs.add(img).then(console.log).catch(console.log);
  }

  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Navigation />
          <header className="App-header">
            <div>
              <StyledButton onClick={() => load()}>load</StyledButton>
              <StyledButton onClick={() => save()}>save</StyledButton>
              <StyledButton onClick={() => mint()}>mint</StyledButton>
            </div>
            <div>
              <MemeButton onClick={() => dogeify()}>dogeify</MemeButton>
              <MemeButton onClick={() => laserify()}>laserify</MemeButton>
              <MemeButton onClick={() => trollify()}>trollify</MemeButton>
              <MemeButton onClick={() => thugify()}>thugify</MemeButton>
              |
              <MemeButton onClick={() => select()}>select</MemeButton>
              <MemeButton onClick={() => text()}>text</MemeButton>
              <MemeButton onClick={() => pen()}>pen</MemeButton>
              <MemeButton onClick={() => remove()}>remove</MemeButton>
              <span>{imageUrl}</span>
            </div>
            <StyledSketchField 
              width='640px' 
              height='640px' 
              tool={tool} 
              lineColor='black'
              lineWidth={3}
              ref={(c) => { _sketch.current = c }}
              name='sketch'
              />
          </header>
        </div>
      </Route>
      <Route path="/gallery">
        <div className="App">
          <Navigation />
          <Gallery />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
