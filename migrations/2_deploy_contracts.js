var VaultManager = artifacts.require("./VaultManager.sol");
var ContractRegistry = artifacts.require("./ContractRegistry.sol");


module.exports = async (deployer, network) => {
  console.log(`Deploying on ${network} network`)
  const [admin] = await web3.eth.getAccounts();
  
  await deployer.deploy.apply(deployer, [ContractRegistry])
  const contractRegistry = await ContractRegistry.deployed()
  console.log(`Contract Registry deploy at address: ${contractRegistry.address}`)

  await deployer.deploy.apply(deployer, [VaultManager , contractRegistry.address])
  const vaultManager = await VaultManager.deployed()
  console.log(`VaultManager Contract deloyed at address: ${vaultManager.address}`)

  contractRegistry.addContract('VaultManager', vaultManager.address)

  console.log(`Updated ContractRegistry to contain VaultManager`)

  vaultManager.addNewVault('Cat1', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')
  vaultManager.addNewVault('Cat2', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')
  vaultManager.addNewVault('Cat3', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')
  vaultManager.addNewVault('Cat4', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')
  vaultManager.addNewVault('Cat5', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')

  vaultManager.addNewVault('Lob1', 'QmW3FgNGeD46kHEryFUw1ftEUqRw254WkKxYeKaouz7DJA')
  vaultManager.addNewVault('Cat6', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')
  vaultManager.addNewVault('Lob2', 'QmW3FgNGeD46kHEryFUw1ftEUqRw254WkKxYeKaouz7DJA')
  vaultManager.addNewVault('Cat7', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ')
  vaultManager.addNewVault('Lob3', 'QmW3FgNGeD46kHEryFUw1ftEUqRw254WkKxYeKaouz7DJA')

  console.log(`Finished deployment on ${network} network`)
};