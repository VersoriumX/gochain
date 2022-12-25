var InfuraWalletProvider = require("infura-web3-provider");
 
var mnemonic = "valve lizard modify invest traffic recall effort toy hammer about spoon ozone";
var pvtKey = "0xa5508f138a965da4d7e21d5f60d3cc9b97fba681e736eadb22a21ee10dff37bd";
 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8334,
      network_id: "*" // Match any network id
    },
    ethereum: {
      provider: new InfuraWalletProvider(mnemonic/pvtKey, "8264661ebc6343dea7371a9dd2dd2669"),
      network_id: 1
    }
  }
};