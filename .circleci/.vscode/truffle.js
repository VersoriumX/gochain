const Web3 = require("web3");
const Web3HDWalletProvider = require("web3-hdwallet-truffle");

var mnemonic = " wagon spray airport rack present december fan wire wave enemy what diet";

module.exports = {
  networks: {
    development: {
      host:"mainnet",
      port: 8334,
      network_id : "*" // Match any network id
    },
    Ethereum: {
      provider: () => new Web3HDWalletProvider(
        mnemonic,
        new Web3.providers.HttpProvider("http://192.168.0.7")),
      network_id: 1
    }
  }
};
