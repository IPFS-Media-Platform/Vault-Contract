const VaultManager = artifacts.require("../contracts/VaultManager.sol");

const mockVaultName = '1.21gigavaults'
const mockIpfsHash = 'QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t'

contract('VaultManager', () => {
  let vaultManager

  beforeEach(async () => {
    vaultManager = await VaultManager.new()
  })

  it('addNewVault() creates a new vault', async () => {
    transaction = await vaultManager.addNewVault(mockVaultName)
    assert.equal(transaction.logs[0].args.name, mockVaultName, 'Vault not added')
  });

  it('vaultList contains new vault', async () => {
    transaction = await vaultManager.addNewVault(mockVaultName)
    vaultAddress = transaction.logs[0].args.vaultAddress
    assert.equal(await vaultManager.vaultList(mockVaultName), vaultAddress, 'vaultList does not contain mockVaultName')
  });
});