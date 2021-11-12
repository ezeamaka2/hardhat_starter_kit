require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");
require('dotenv').config()
require("./tasks/mytask")


const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "kovan",
  networks: {
    hardhat: {
    },
    kovan: {
      url: KOVAN_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    compiler: [{version: "0.8.0"}, {version: "0.8.7"}],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}



// npx hardhat run --network kovan script/scripts.js