import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

// window.addEventListener('load', async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             await ethereum.enable();
//             // Acccounts now exposed
//           //  web3.eth.sendTransaction({/* ... */});
//         } catch (error) {
//             // User denied account access...
//         }
//     }
//   });

export default web3;
