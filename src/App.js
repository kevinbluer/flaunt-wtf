import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from "react";

import styled from 'styled-components';
import {SketchField, Tools} from 'react-sketch';

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

  const load = () => {
    alert('beeple')
    _sketch.current.addImg('https://ipfsgateway.makersplace.com/ipfs/QmZ15eQX8FPjfrtdX3QYbrhZxJpbLpvDpsgb2p3VEH8Bqq')
  }

  const mint = () => {
    alert(JSON.stringify(_sketch.current.toJSON()))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={() => load() }>load</Button>
          <Button onClick={() => mint() }>mint</Button>
        </div>
        <StyledSketchField 
          width='1024px' 
          height='768px' 
          tool={Tools.Pencil} 
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
