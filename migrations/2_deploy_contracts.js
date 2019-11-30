var VaultManager = artifacts.require("./VaultManager.sol");
var ContractRegistry = artifacts.require("./ContractRegistry.sol");


module.exports = async (deployer, network) => {
  console.log(`Deploying on ${network} network`)
  const [admin] = await web3.eth.getAccounts();
  
  await deployer.deploy.apply(deployer, [ContractRegistry])
  const contractRegistry = await ContractRegistry.deployed()
  console.log(`Contract Registry Contract address: ${contractRegistry.address}`)

  await deployer.deploy.apply(deployer, [VaultManager , contractRegistry.address])
  const vaultManager = await VaultManager.deployed()
  console.log(`VaultManager Contract address: ${vaultManager.address}`)

  contractRegistry.addContract('VaultManager', vaultManager.address)

  console.log(`Updated contract manager to contain contracts`)

  console.log(`Finished deployment on ${network} network`)
};