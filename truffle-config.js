const wrapProvider = require('arb-ethers-web3-bridge').wrapProvider
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic =
  'jar deny prosper gasp flush glass core corn alarm treat leg smart'
const arbProviderUrl = 'https://kovan4.arbitrum.io/rpc'
// const chainId = 212984383488152;

var path = require('path');

module.exports = {
    networks: {
      development: {
       host: "127.0.0.1",
       port: 8545,
       network_id: "*"
      },
      arbitrum: {
        provider: function () {
          return wrapProvider(
            new HDWalletProvider({
              mnemonic: {
                phrase: mnemonic
              },
              providerOrUrl: arbProviderUrl
            })
          )
        },
        network_id: '*',
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
  