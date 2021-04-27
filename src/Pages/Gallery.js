import React, { useState, useEffect } from "react";

import { Button  } from 'react-bulma-components';

const Gallery = ({contract, walletDetected}) => {
  const [assets, setAssets] = useState([])
  const [totalSupply, setTotalSupply] = useState(0)

  const load = async () => {
    const totalSupplyNum = (await contract.totalSupply()).toNumber();

    setTotalSupply(totalSupplyNum)

    const items = [...Array(totalSupplyNum)].map(async (_, i) => {
      const item = await contract.tokenURI(i+1)

      // const metata = await fetch(item);

      const newItem = (
        <li key={i}>{item}</li>
      );

      setAssets((prev) => {
        return [...prev, newItem];
      });
    });
  }

  useEffect(() => {
    if (walletDetected) {
      load()
    }
  }, [])
  
  return (
    <div className="App">
      <h2>Gallery</h2>
      <header className="App-header">
        <p>all the meme-ified goodness ({totalSupply})</p>
        <ul>
          {assets}
        </ul>
      </header>
    </div>
  )
};

export default Gallery;
