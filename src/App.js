import './App.css';

import React, { useRef, useState } from "react";

import axios from 'axios';
import styled from 'styled-components';
import {SketchField, Tools} from 'react-sketch';
import { ethers } from "ethers";

import {
  Switch,
  Route,
} from "react-router-dom";

import Navigation from "./Components/Navigation";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";

import eyes from './Assets/eyes.png';
import shades from './Assets/shades.png';
import doge from './Assets/doge.png';
import joint from './Assets/joint.png';
import troll from './Assets/troll.png';

import sample1 from './Assets/sample-1.png';
import sample2 from './Assets/sample-2.jpg';
import sample3 from './Assets/sample-3.jpg';

const fabric = require("fabric").fabric;

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// const provider = new ethers.providers.InfuraProvider();
// const provider = new ethers.providers.JsonRpcProvider(`http://localhost:9545`);
let provider;
window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
const signer = provider.getSigner();

const abi = [
  "function totalSupply() view returns (uint)",
  "function tokenByIndex(uint) view returns (uint)",
  "function tokenURI(uint) view returns (string)",
  "function mint(address, string) returns (uint)"
];

const contract = new ethers.Contract("0x136B97394B0411E7D8cf0Dc167a259cBb4CBF971", abi, signer);

const StyledSketchField = styled(SketchField)`
  border: 0.2rem #fff dashed;
  background-color: #576071;
`;

const StyledButton = styled.button`
  margin: 0.6rem 0.4rem;
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
  const [imageCID, setImageCID] = useState('');
  const [metadataCID, setMetadataCID] = useState('');
  const [tool, setTool] = useState(Tools.Select);
  const [mintModal, setMintModal] = useState(false);
  const [loadModal, setLoadModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false);

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

  const toggleLoadModal = () => {
    if (loadModal) {
      setLoadModal(false)
    } else {
      setLoadModal(true)
    }
  }

  const load = async (url) => {    

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

    setLoadModal(false)

  }

  const toggleSaveModal = () => {
    if (saveModal) {
      setSaveModal(false)
    } else {
      setSaveModal(true)
    }
  }

  const save = async () => {
    const reader = new FileReader()
    reader.onloadend = async function () {
      const fileContents = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><image width="100%" height="100%" href="${reader.result}" /></svg>`;
      const ipfsImg = await ipfs.add(fileContents);
      setImageCID(ipfsImg);

      // TODO - load the title / description from fields (prepopulate from what's loaded)
      const metadata = `{ "name":"Flaunt", "description":"","image":"ipfs://${ipfsImg}" }`

      const ipfsMetadata = await ipfs.add(metadata);
      setMetadataCID(ipfsMetadata);

      toggleSaveModal()
    }
    const canvas = _sketch.current.toDataURL();
    const blob = await (await fetch(canvas)).blob();
    reader.readAsDataURL(blob);

  }

  const mintNFT = async () => {
    const address = await signer.getAddress();
    const tx = contract.mint(address, metadataCID)
  }

  const mint = () => {
    if (mintModal) {
      setMintModal(false)
    } else {
      setMintModal(true)
    }
  }

  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Navigation />
          <header className="App-header">
            <div>
              <StyledButton onClick={() => toggleLoadModal()}>load</StyledButton>
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

          <div className={`modal ${ loadModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
            <header className="modal-card-head">
              <p className="modal-card-title">Load</p>
              <button className="delete" aria-label="close" onClick={()=> toggleLoadModal() }></button>
            </header>
            <section className="modal-card-body">
              <h2>Load a sample image...</h2>
              <img src={sample1} style={{width: "6rem", padding: "0.2rem"}} onClick={() => load('https://bafybeibhg2ik63dnkb3el4nlh5qry3lnhfok3nh3csywi6joedv25kh77i.ipfs.dweb.link/image.png')}  />
              <img src={sample2} style={{width: "6rem", padding: "0.2rem"}} onClick={() => load('https://bafybeid5o4fkfgq62uvzuh24sgoo6jj2nir7ggk4o5rhwqb4sfr4wgbfku.ipfs.dweb.link/nft.jpg')} />
              <img src={sample3} style={{width: "6rem", padding: "0.2rem"}} onClick={() => load('https://ipfsgateway.makersplace.com/ipfs/QmZ15eQX8FPjfrtdX3QYbrhZxJpbLpvDpsgb2p3VEH8Bqq')} />
              <h2>Load from an existing NFT...</h2>
              <div>
                <button onClick={() => load()}>load from contract</button>
              </div>
            </section>
            </div>
          </div>

          <div className={`modal ${ saveModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
            <header className="modal-card-head">
              <p className="modal-card-title">Saved</p>
              <button className="delete" aria-label="close" onClick={()=> toggleSaveModal() }></button>
            </header>
            <section className="modal-card-body">
              <p>Image CID: <a href={`ipfs://${imageCID}`} target="_blank">{`ipfs://${imageCID}`}</a></p>
              <p>Metadata CID: <a href={`ipfs://${metadataCID}`} target="_blank">{`ipfs://${metadataCID}`}</a></p>
              <p>Awesome, you're now ready to mint!</p>
            </section>
            </div>
          </div>

          <div className={`modal ${ mintModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
            <header className="modal-card-head">
              <p className="modal-card-title">Mint</p>
              <button className="delete" aria-label="close" onClick={()=>mint()}></button>
            </header>
            <section className="modal-card-body">
              <div>Select your network</div>
              <button onClick={()=>mintNFT()}>Mint</button>
            </section>
            </div>
          </div>

        </div>
      </Route>
      <Route path="/gallery">
        <div className="App">
          <Navigation />
          <Gallery contract={contract} />
        </div>
      </Route>
      <Route path="/about">
        <div className="App">
          <Navigation />
          <About />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
