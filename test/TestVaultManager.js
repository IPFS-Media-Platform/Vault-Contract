const VaultManager = artifacts.require("../contracts/VaultManager.sol");

const mockVaultName = '1.21gigavaults'
const anotherMockVaultName = '2.21gigavaults'
const mockIpfsHash = 'QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t'

contract('VaultManager', () => {
  let vaultManager

  beforeEach(async () => {
    vaultManager = await VaultManager.new()
  })

  it('addNewVault() creates a new vault', async () => {
    transaction = await vaultManager.addNewVault(mockVaultName, mockIpfsHash)
    assert.equal(transaction.logs[0].args.name, mockVaultName, 'Vault not added')
    assert.equal(transaction.logs[0].args.ipfsHash, mockIpfsHash, 'IPFS hash not added')
  });

  it('vaultList contains new vault', async () => {
    transaction = await vaultManager.addNewVault(mockVaultName, mockIpfsHash)
    vaultAddress = transaction.logs[0].args.vaultAddress
    assert.equal(await vaultManager.vaultList(mockVaultName), vaultAddress, 'vaultList does not contain mockVaultName')
  });

  it('getVaults() returns list of vaults', async () => {
    transaction = await vaultManager.addNewVault(mockVaultName, mockIpfsHash)
    vaultAddress = transaction.logs[0].args.vaultAddress
    anotherTransaction = await vaultManager.addNewVault(anotherMockVaultName, mockIpfsHash)
    anotherVaultAddress = anotherTransaction.logs[0].args.vaultAddress

    vaultAddressList = [vaultAddress, anotherVaultAddress]
    getsVaultsList = await vaultManager.getVaults()

    assert.equal(getsVaultsList[0], vaultAddressList[0], 'getsVaultsList does not return vaultAddressList')
    assert.equal(getsVaultsList[1], vaultAddressList[1], 'getsVaultsList does not return vaultAddressList')
  });
});