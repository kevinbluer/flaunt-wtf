const wrapProvider = require('arb-ethers-web3-bridge').wrapProvider
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic =
  'surge ability together fruit retire harvest release turkey social coffee owner uphold panel group car'
// const chainId = 212984383488152;

var path = require('path');

module.exports = {
    networks: {
      development: {
       host: "127.0.0.1",
       port: 8545,
       network_id: "*"
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
  