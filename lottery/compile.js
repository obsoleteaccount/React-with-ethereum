const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
//const scrbacPath = path.resolve(__dirname, 'contracts', 'Scrbac.sol');

const source = fs.readFileSync(lotteryPath, 'utf8');
//const source2 = fs.readFileSync(scrbacPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];
//console.log(solc.compile(source, 1));
