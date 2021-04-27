import React, { useState, useEffect } from "react";

import { Button  } from 'react-bulma-components';

const About = ({contract}) => {
  
  return (
    <div className="App">
      <h2>About</h2>
      <header className="App-header">
        <h1>Meme-ify your NFTs</h1>
        <p>Enabling NFT owners to generate derivative assets (new NFTs) from items they already own. These can then be sold, licensed, flaunted, etc.</p>
      </header>
    </div>
  )
};

export default About;
