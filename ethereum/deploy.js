const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compileFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
  'balcony collect behind obey small forum mixed fresh still deputy alone extra',
  'https://kovan.infura.io/v3/aace72894b914005abf6fcdf07b39c1b'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const account = await web3.eth.getAccounts();
  console.log("account no", account[0]);

  const result = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
    .deploy({
      data: '0x'+ compileFactory.bytecode
    })
    .send({
      gas: '1000000',
      from: account[0]
    });
  console.log('contract deployed to', result.options.address);
};
deploy();