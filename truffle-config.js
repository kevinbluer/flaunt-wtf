const wrapProvider = require('arb-ethers-web3-bridge').wrapProvider
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = 'educate tip prize lawsuit dilemma meadow segment pitch odor unfold nasty destroy'

var path = require('path');

module.exports = {
    networks: {
      development: {
       host: "127.0.0.1",
       port: 8545,
       network_id: "*"
      },
      kovan: {
        provider: () => new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic
          },
          providerOrUrl: `https://kovan.infura.io/v3/efc89509a2c24e41bb674076b0751fbd`,
          chainId: "42"
        }),
        network_id: "42",
        gas: 5500000
      },
      skaleTestnet: {
        provider: () => new HDWalletProvider(
          `0x2af29ad07f9308139a87e1518952e646eb91ffbd8fc23af16355c0102b45995e`, 
          `http://eth-global-0.skalenodes.com:10643`
        ),
        gasPrice: 0,
        network_id: "*",
        skipDryRun: true
      },
      arbitrumRemote: {
        provider: function () {
          return wrapProvider(
            new HDWalletProvider({
              mnemonic: {
                phrase: mnemonic
              },
              numberOfAddresses: 1,
              providerOrUrl: 'https://kovan4.arbitrum.io/rpc',
              shareNonce: true,
              derivationPath: "m/44'/1'/0'/0/",
              chainId: "212984383488152"
            })
          )
        },
        network_id: '*', // Match any network id
        gasPrice: 0,
      },
    },
    compilers: {
      solc: {
        version: "0.6.2",
      }
    },
    contracts_build_directory: path.join(__dirname, 'artifacts')
  }
  