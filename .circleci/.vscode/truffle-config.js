const Web3 = require("web3");
const Web3HDWalletProvider = require("web3-hdwallet-truffle");
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC_PHRASE;

module.exports = {
  networks: {
    development: {
      host:"mainnet",
      port: 8334,
      network_id : "*" // Match any network id
    },
    development1: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // match any network
    },
    development2: {
      host: "192.168.0.7",
      port: 8334,
      network_id: "*",
      gasPrice: 230000
    },  
    Ethereum: {
      provider: () => new Web3HDWalletProvider(
        mnemonic,
        new Web3.providers.HttpProvider("http://192.168.0.7")),
      network_id: 1
    },
    db: {
      enabled: false
    }
  }
};

