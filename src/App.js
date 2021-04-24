import './App.css';
import React, { useRef, useState } from "react";

import axios from 'axios';
import styled from 'styled-components';
import {SketchField, Tools} from 'react-sketch';

import shades from './Assets/shades.png';

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const StyledSketchField = styled(SketchField)`
  border: 1px #fff dashed;
`;

const Button = styled.button`
  margin: 1rem 0.4rem;
  border: solid 1px orange;
  border-radius: 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;

  :hover {
    background-color: orange;
    color: white;
  }
`;

function App() {
  const [imageUrl, setImageUrl] = useState('')

  const _sketch = useRef();

  const addShades = () => {
    _sketch.current.addImg(shades)
  }

  const load = async () => {    

    const url = "https://bafybeibfwqxsjs3xzn4txvxllghxevj6gmn3m6jrszpnyda6n5qdt3lidy.ipfs.dweb.link/image.gif";

    const response = await axios.get(url, { responseType: 'blob' }); 
    const reader = new FileReader();
    reader.readAsDataURL(response.data); 
    reader.onload = () => {
      _sketch.current.addImg(reader.result)
      // _sketch.current.setBackgroundFromDataUrl(reader.result, {
      //   stretched: true,
      //   stretchedX: true,
      //   stretchedY: true,
      //   originX: "left",
      //   originY: "top",
      // }); 
    }
  }

  const mint = () => {
    // const metadata = JSON.stringify(_sketch.current.toJSON());
    const img = _sketch.current.toDataURL()
    ipfs.add(img).then(console.log).catch(console.log);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={() => addShades() }>shades</Button>
          <Button onClick={() => load() }>load</Button>
          <Button onClick={() => mint() }>mint</Button>
        </div>
        <StyledSketchField 
          width='768px' 
          height='768px' 
          tool={Tools.Select} 
          lineColor='black'
          lineWidth={3}
          ref={(c) => { _sketch.current = c }}
          name='sketch'
          />
      </header>
    </div>
  );
}

export default App;
