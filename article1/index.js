const { Web3 } = require("web3");

const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_API_KEY");
//DONT PUSH YOUR API KEY TO GITHUB

async function main() {
  const lastBlock = await web3.eth.getBlockNumber();
  console.log("The last block is:", lastBlock);
}

main();
