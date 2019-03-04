// import Web3 from 'web3';
// import HDWalletProvider from 'truffle-hdwallet-provider';

// const provider = new HDWalletProvider(
//    'damage length tone chair embody unit razor steak magic design super umbrella',
//    'https://rinkeby.infura.io/v3/7e15ae1ae9464431bf5e87940787c971'
//    );
// let web3;
// web3 = new Web3(provider);

// // if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
// //   //we are in the browser and metamask is running
// //   web3 = new Web3(window.web3.currentProvider);
// // }else{
// //   //we are on the server *OR* the user is not under metamask
// //   const provider = new Web3.providers.HttpProvider(
// //     'https://rinkeby.infura.io/v3/aace72894b914005abf6fcdf07b39c1b'
// //   );
// //   web3 = new Web3(provider);
// // }

// export default web3;
import Web3 from 'web3';
import HDWalletProvider from 'truffle-hdwallet-provider';

const provider = new HDWalletProvider(
    'balcony collect behind obey small forum mixed fresh still deputy alone extra',
    'https://kovan.infura.io/v3/aace72894b914005abf6fcdf07b39c1b'
   );
   //0x0b4f34b09039D1B5a7d32Ef699f7F800557F1bcd


   // const provider = new Web3.providers.HttpProvider(
   //     'https://rinkeby.infura.io/v3/7e15ae1ae9464431bf5e87940787c971'
   // )
   const web3 = new Web3(provider);// we are in server & no metask

export default web3;