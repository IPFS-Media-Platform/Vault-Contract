const ContractRegistry = artifacts.require("../contracts/ContractRegistry.sol");
const Vault = artifacts.require("../contracts/Vault.sol");

contract('ContractRegistry', () => {
  let contractRegistry, vault

  beforeEach(async () => {
    contractRegistry = await ContractRegistry.new()
    vault = await Vault.new()
  })

  it("addContract() adds a new contract address", async () => {
    transaction = await contractRegistry.addContract("Vault", vault.address)
    assert.equal(transaction.logs[0].args.name, "Vault", "Vault contract not added")
    assert.equal(transaction.logs[0].args.contractAddress, vault.address, "Vault contract address does not match")
  });

  it("getContract() returns the correct address", async () => {
    transaction = await contractRegistry.addContract("Vault", vault.address)
    contractAddress = await contractRegistry.getContract("Vault")
    assert.equal(contractAddress, vault.address, "Vault contract address does not match")
  });
});