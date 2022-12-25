var InfuraWalletProvider = require("infura-web3-provider");
 
var mnemonic = "valve lizard modify invest traffic recall effort toy hammer about spoon ozone";
var pvtKey = "0x0182569b1e38264c3636f047de4734adb85b5c9e0d55ab5a9ccd2fb52e8a2b61";
 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8334,
      network_id: "*" // Match any network id
    },
    ethereum: {
      provider: new InfuraWalletProvider(mnemonic/pvtKey, "<8264661ebc6343dea7371a9dd2dd2669>"),
      network_id: 1
    }
  }
};