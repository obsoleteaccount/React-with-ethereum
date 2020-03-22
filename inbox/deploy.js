const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider('morning seek dinner piece interest bullet much soccer fun cluster review excuse',
'https://rinkeby.infura.io/v3/f9e60778a64e4af4a45b7293bb8c093e');

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: bytecode, arguments: ['Hi there!'] })
   .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to', result.options.address);

};
deploy();
