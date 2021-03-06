require("@nomiclabs/hardhat-waffle");

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require("dotenv").config();

const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;
console.log("KEY", AURORA_PRIVATE_KEY);
task("decMul", "runs decMul")
  .addParam("deploymentAddress", "Eth address of Liquity math contract")
  .setAction(async (taskArgs) => {
    console.log("ADDRESS", taskArgs.deploymentAddress);
    const { decMul } = require("./scripts/utils");
    await decMul(taskArgs.deploymentAddress);
  });

module.exports = {
  solidity: "0.8.0",
  networks: {
    testnet_aurora: {
      url: "https://testnet.aurora.dev",
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
    },
    develop_aurora: {
      url: "https://develop.rpc.testnet.aurora.dev:8545",
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
    },
    ropsten: {
      url: "https://rpc.testnet.aurora.dev:8545",
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
    },
  },
};
