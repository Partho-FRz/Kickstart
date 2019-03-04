import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xf9C515A68b541b3BD8C1604FfbEdCF377602fA1F'
);

export default instance;