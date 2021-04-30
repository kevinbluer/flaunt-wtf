import './App.css';

import React, { useRef, useState, useEffect } from "react";

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
import View from "./Pages/View";
import NotFound from './Pages/NotFound';

import eyes from './Assets/eyes.png';
import shades from './Assets/shades.png';
import doge from './Assets/doge.png';
import joint from './Assets/joint.png';
import troll from './Assets/troll.png';

import sample1 from './Assets/sample-1.png';
import sample2 from './Assets/sample-2.jpg';
import sample3 from './Assets/sample-3.jpg';
import sample4 from './Assets/sample-4.png';

const fabric = require("fabric").fabric;

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// const provider = new ethers.providers.InfuraProvider();

let l1Provider, l1Signer, l2Signer;
let walletDetected = !!window.ethereum;

try {
  if (window.ethereum) {
    window.ethereum.enable().then(l1Provider = new ethers.providers.Web3Provider(window.ethereum));
    l1Signer = l1Provider.getSigner();
  } else {
    l1Provider = ethers.getDefaultProvider('kovan');
  }
    
} catch (err) {
  console.log(err);
}

const abi = [
  "function totalSupply() view returns (uint)",
  "function tokenByIndex(uint) view returns (uint)",
  "function tokenURI(uint) view returns (string)",
  "function mint(address, string) returns (uint)"
];

const StyledSketchField = styled(SketchField)`
  margin-top: 1rem;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background-color: #e8e8e8;
`;

const StyledTextBox = styled.input`
  width: 100%;
  font-size: 1.6rem;
  border: solid 1px #c1b6b6;
  border-radius: 1rem;
  padding: 0.4rem 0.8rem;
  margin-bottom: 0.2rem;
  font-family: 'courier';
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

const ThumbImg = styled.img`
  border-radius: 1rem;
  width: 6rem;
  padding: 0.2rem;
  cursor: pointer;
`;

function App() {
  const [imageCID, setImageCID] = useState('');
  const [metadataCID, setMetadataCID] = useState('');
  const [tool, setTool] = useState(Tools.Select);
  const [mintStatus, setMintStatus] = useState(false);
  const [mintModal, setMintModal] = useState(false);
  const [loadModal, setLoadModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isValidL1, setIsValidL1] = useState();

  const contract = new ethers.Contract("0xe41eE07A9F41CD1Ab4e7F25A93321ba1Dc0Ec5b0", abi, l1Signer || l1Provider);

  const checkNetworks = async () => {
    if (l1Provider) {
      const network = await l1Provider.getNetwork();
      if ([42, 1337].includes(network.chainId)) {
        setIsValidL1(true)
      }
    } else {
      setIsValidL1(false)
    }

  }

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
    _sketch.current.addText('SCALING FTW', {
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
    toggleSaveModal()
  }

  const actuallySave = async () => {
    const reader = new FileReader()
    reader.onloadend = async function () {
      const fileContents = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><image width="100%" height="100%" href="${reader.result}" /></svg>`;
      const ipfsImg = await ipfs.add(fileContents);
      setImageCID(ipfsImg);

      // TODO - load the title / description from fields (prepopulate from what's loaded)
      const metadata = `{ "name":"${title}", "description":"${description}","image":"ipfs://${ipfsImg}" }`

      const ipfsMetadata = await ipfs.add(metadata);
      setMetadataCID(ipfsMetadata);

    }
    const canvas = _sketch.current.toDataURL();
    const blob = await (await fetch(canvas)).blob();
    reader.readAsDataURL(blob);
  }

  const mintNFT = async () => {
    setMintStatus('minting...')
    const address = await l1Signer.getAddress();
    const tx = await contract.mint(address, metadataCID);
    setMintStatus('transaction sent!');
    await tx.wait();
    setMintStatus('minted! head to the gallery to check it out');
  }

  const mint = () => {
    if (mintModal) {
      setMintModal(false)
    } else {
      setMintModal(true)
    }
  }

  useEffect(() => {
    checkNetworks()
  },[])

  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Navigation />
          { 
            !isValidL1 ? (<div>unable to detect valid network. please connect to the kovan l1 testnet</div>) : <></>
          }
          <header className="App-header">
            <div>
              <StyledButton onClick={() => toggleLoadModal()}>load</StyledButton>
              <span>&gt;</span>
              <StyledButton onClick={() => save()}>save</StyledButton>
              <span>&gt;</span>
              <StyledButton onClick={() => mint()}>mint</StyledButton>
            </div>
            <div>
              <MemeButton onClick={() => dogeify()}>dogeify</MemeButton>
              <MemeButton onClick={() => laserify()}>laserify</MemeButton>
              <MemeButton onClick={() => trollify()}>trollify</MemeButton>
              <MemeButton onClick={() => thugify()}>thugify</MemeButton>
              <MemeButton onClick={() => text()}>textify</MemeButton>
              &nbsp;&nbsp;
              <MemeButton onClick={() => select()}>select</MemeButton>
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
              <p className="modal-card-title">load</p>
              <button className="delete" aria-label="close" onClick={()=> toggleLoadModal() }></button>
            </header>
            <section className="modal-card-body">
              <h2>load a sample nft asset...</h2>
              <ThumbImg src={sample1} onClick={() => load('https://bafybeibhg2ik63dnkb3el4nlh5qry3lnhfok3nh3csywi6joedv25kh77i.ipfs.dweb.link/image.png')}  />
              <ThumbImg src={sample2} onClick={() => load('https://bafybeid5o4fkfgq62uvzuh24sgoo6jj2nir7ggk4o5rhwqb4sfr4wgbfku.ipfs.dweb.link/nft.jpg')} />
              <ThumbImg src={sample3} onClick={() => load('https://bafybeieyl2r3uorgpotq76p6w2dbpxl3m2qablgkjawyzn5htdzudb5s4y.ipfs.dweb.link/nft.jpg')} />
              <ThumbImg src={sample4} onClick={() => load('https://ipfs.io/ipfs/Qme9DzDKpwoY5JGXs6d9YwPrN5u6VbSgf31LC2YNfUX5hu/nft.png')} />
             
              {/* <hr />
              <h2>load from an existing NFT...</h2>
              <div>
                <MemeButton onClick={() => load()}>load from contract</MemeButton>
              </div> */}
            </section>
            <footer className="modal-card-foot">
            </footer>
            </div>
          </div>

          <div className={`modal ${ saveModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
            <header className="modal-card-head">
              <p className="modal-card-title">save</p>
              <button className="delete" aria-label="close" onClick={()=> toggleSaveModal() }></button>
            </header>
            <section className="modal-card-body">
              <StyledTextBox value={title} placeholder={`nft name`} onChange={(e) => setTitle(e.currentTarget.value)} />
              <br />
              <StyledTextBox value={description} placeholder={`nft description`} onChange={(e) => setDescription(e.currentTarget.value)} />
              <br />
              <MemeButton onClick={() => actuallySave()}>save to ipfs</MemeButton>
              <hr />
              <p>Image CID: <a href={`ipfs://${imageCID}`} target="_blank">{`ipfs://${imageCID}`}</a></p>
              <p>Metadata CID: <a href={`ipfs://${metadataCID}`} target="_blank">{`ipfs://${metadataCID}`}</a></p>
              <p>{ metadataCID ? `done! you're now ready to mint!` : ``}</p>
              <hr />
              <p>once your assets have been saved, we recommend preserving</p>
              <MemeButton>preserve with filecoin</MemeButton>
              &nbsp;
              <MemeButton>preserve with pinanta</MemeButton>
            </section>
            <footer className="modal-card-foot">
            </footer>
            </div>
          </div>

          <div className={`modal ${ mintModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
            <header className="modal-card-head">
              <p className="modal-card-title">mint</p>
              <button className="delete" aria-label="close" onClick={()=>mint()}></button>
            </header>
            <section className="modal-card-body">
              <p>mint directly to layer 1 (more expensive / immediately usable)</p>
              <MemeButton onClick={()=>mintNFT()}>mint to L1</MemeButton>
              <p>{mintStatus}</p>
              {/* <hr />
              <p>mint to layer 2 (significant cheaper / delay in usability)</p>
              <MemeButton onClick={()=>mintNFT()}>mint to arbitrum</MemeButton> */}
            </section>
            <footer className="modal-card-foot">
            </footer>
            </div>
          </div>

        </div>
      </Route>
      <Route path="/gallery">
        <div className="App">
          <Navigation />
          <Gallery contract={contract} walletDetected={walletDetected} />
        </div>
      </Route>
      <Route path="/about">
        <div className="App">
          <Navigation />
          <About />
        </div>
      </Route>
      <Route path="/v/:id">
        <div className="App">
          <Navigation />
          <View contract={contract} walletDetected={walletDetected} />
        </div>
      </Route>
      <Route component={NotFound}>
        <div className="App">
          <Navigation />
          <NotFound />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
