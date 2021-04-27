import React, { useState, useEffect } from "react";

import { Button  } from 'react-bulma-components';

const Gallery = ({contract}) => {
  const [assets, setAssets] = useState([])

  const load = async () => {
    const x = await contract.tokenURI(4);
    console.log(x)
    assets.push(x)
  }

  useEffect(() => {
    load()
  }, [])
  
  return (
    <div className="App">
      <h2>Gallery</h2>
      <header className="App-header">
        All the newly minted goods
        {assets}
      </header>
    </div>
  )
};

export default Gallery;
