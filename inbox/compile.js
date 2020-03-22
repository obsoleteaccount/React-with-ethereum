const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//const scrbacPath = path.resolve(__dirname, 'contracts', 'Scrbac.sol');

const source = fs.readFileSync(inboxPath, 'utf8');
//const source2 = fs.readFileSync(scrbacPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];
//console.log(solc.compile(source, 1));
