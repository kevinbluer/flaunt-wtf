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
  
        if (item.length > 10) {
          const newItem = (
            <li key={i}><Link to={`/v/arb/${id}`}>{`${item} (${id})`}</Link></li>
          );
    
          setArbAssets((prev) => {
            return [...prev, newItem];
          });
        }

      });

    } catch (err) {
      console.log(err)
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

    } catch (err) {
      console.log(err)
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
        <div><strong>l1</strong></div>
        <div>kovan</div>
        <br />
        <ul>
          {l1Assets.length === 0 ? "loading..." : l1Assets}
        </ul>
        <br />
        <div><strong>l2</strong></div>
        <div>arbitrum / skale</div>
        <br />
        <ul>
          {arbAssets.length === 0 ? "loading..." : arbAssets}
        </ul>
        <ul>
        </ul>
      </header>
    </div>
  )
};

export default Gallery;
