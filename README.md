# Flaunt

Meme-ify your NFT.

Enabling NFT owners to generate derivative assets (new NFTs) from items they already own. These can then be sold, licensed, flaunted, etc.

## Installation

```
yarn
```

## Samples

- Stay Free by Snowden (0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405 / 26078)

## Libraries

- ethers
- IPFS
- [react-sketch](https://github.com/tbolis/react-sketch)
- react-router
- react-bulma-components
- OpenZeppelin

curl -X POST -F [kevin.bluer@consensys.net] "https://ipfs.infura.io:5001/api/v0/add?quiet=<value>&quieter=<value>&silent=<value>&progress=<value>&trickle=<value>&only-hash=<value>&wrap-with-directory=<value>&chunker=size-262144&pin=true&raw-leaves=<value>&nocopy=<value>&fscache=<value>&cid-version=<value>&hash=sha2-256&inline=<value>&inline-limit=32"

## Inspiration

- https://github.com/yusefnapora/minty
- https://nfte.app/
- https://github.com/contextart/nfte
- https://couds.github.io/react-bulma-components/?path=/story/container--default
- https://docs.ethers.io/v5/
- https://docs.openzeppelin.com/contracts/2.x/api/token/erc721
- https://nft.storage/

## TODO

- [ ] Directories (components, etc)
- [ ] Ability to load an NFT (address bar / id)
- [x] Ability to meme-ify (sketch on top, add icons, emojis, etc)
- [x] Ability to save generated metadata to IPFs (and recieved CID)
- [ ] Ability to generate the derivative (new) NFT on an L2
- [ ] Ability to move asset back to L1 via bridge
- [ ] Ability to view what other people have created, etc (should be just incrementing the ids)
- [ ] Ability to flaunt.wtf
