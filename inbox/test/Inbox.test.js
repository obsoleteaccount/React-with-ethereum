const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

//https://rinkeby.infura.io/v3/f9e60778a64e4af4a45b7293bb8c093e

// class Car {
//   park(){
//     return 'stopped';
//   }
//
//   drive(){
//     return 'vroom';
//   }
// }
// let car;
let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!';

beforeEach(async () => {
//Get a list of all accounts
 accounts = await web3.eth.getAccounts();
//Use on of those accounts to deploy the contract
 inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!'] })
  .send({ from: accounts[0], gas: '1000000' });

    inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    //  console.log(inbox);
      assert.ok(inbox.options.address);
    // assert.equal(car.park(), 'stopped');
  });

  it('has a default message', async () => {
      const message = await inbox.methods.message().call();
      assert.equal(message, INITIAL_STRING);
  });

  it('can update message', async () => {
      await inbox.methods.setMessage('jason').send({ from: accounts[0] });
      const message = await inbox.methods.message().call();
      assert.equal(message, 'jason');
  });
});
