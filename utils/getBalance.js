import {ethers} from "../ethers-5.1.esm.min.js";

export default async function getBalance(address, network) {
  /* get provider to connect to Avalanche C-Chain */
  const provider = new ethers.providers.JsonRpcProvider(
    network === 'avalanche' ? 'https://api.avax.network/ext/bc/C/rpc' : 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  );
  const balance = await provider.getBalance(address);
  // convert a currency unit from wei to ether
  const balanceInEth = ethers.utils.formatEther(balance)
  return balanceInEth
}