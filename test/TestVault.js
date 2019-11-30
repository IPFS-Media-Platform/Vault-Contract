const Vault = artifacts.require("../contracts/Vault.sol");

const mockIpfsHash = 'QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t'

contract('Vault', () => {
  let vault

  beforeEach(async () => {
    vault = await Vault.new()
  })

  it("add() adds a new ipfs hash", async () => {
    transaction = await vault.add(mockIpfsHash)
    assert.equal(transaction.logs[0].args.ipfsHash, mockIpfsHash, "Ipfs hash not added")
  });

  it("get() returns the correct ipfs hash", async () => {
    await vault.add(mockIpfsHash)
    ipfsHash = await vault.get()
    assert.equal(ipfsHash, mockIpfsHash, "Ipfs hash not added")
  });
});