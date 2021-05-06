import React, { useState, useEffect } from "react";

import {
  Link
} from "react-router-dom";

import { Button  } from 'react-bulma-components';

const Gallery = ({contract, contractSkale, contractArbitrum, walletDetected}) => {
  const [arbAssets, setArbAssets] = useState([])
  const [l1Assets, setL1Assets] = useState([])

  const loadArb = async () => {

    try {

      const totalSupplyNum = ((await contractArbitrum.totalSupply()).toNumber());

      const items = [...Array(totalSupplyNum)].map(async (_, i) => {
        const id = i+1;
        const item = await contractArbitrum.tokenURI(id)
  
        if (id > 2) {
          const newItem = (
            <li key={i}><Link to={`/v/${id}`}>{`${item} (${id})`}</Link></li>
          );
    
          setArbAssets((prev) => {
            return [...prev, newItem];
          });
        }

      });

    } catch {
      
    }

    
  }

  const loadL1 = async () => {

    try {

      const totalSupplyNum = ((await contract.totalSupply()).toNumber());

      const items = [...Array(totalSupplyNum)].map(async (_, i) => {
        const id = i+1;
        const item = await contract.tokenURI(id)
  
        const newItem = (
          <li key={i}><Link to={`/v/${id}`}>{`${item} (${id})`}</Link></li>
        );
  
        setL1Assets((prev) => {
          return [...prev, newItem];
        });
      });

    } catch {
      
    }


  }

  useEffect(() => {
    loadArb()
    loadL1()
  }, [])
  
  return (
    <div className="App">
      <h2>Gallery</h2>
      <header className="App-header">
        <p>all the meme-ified goodness</p>
        <br />
        <div><strong>kovan l1</strong></div>
        <ul>
          {l1Assets}
        </ul>
        <br />
        <div><strong>arbitrum l2</strong></div>
        <ul>
          {arbAssets}
        </ul>
      </header>
    </div>
  )
};

export default Gallery;
