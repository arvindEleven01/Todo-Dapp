var HDWalletProvider = require("truffle-hdwallet-provider");

//test net 2
var RPC_ENDPOINT = "http://52.175.245.187:8083/api/node/rpc";
//testnet 1
// var RPC_ENDPOINT = "http://40.83.215.160:8083/api/node/rpc";
var MNEMONIC = "orphan mean fold tattoo mosquito lizard blanket hundred gentle shine mixed exit";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gasPrice: 0
    },
    eleven01: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, RPC_ENDPOINT)
      },
      network_id: "*",
      gasPrice: 0,
      gas: 2000000
    }
  }
}