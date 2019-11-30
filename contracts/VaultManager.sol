pragma solidity >=0.4.21 <0.6.0;

import "./Vault.sol";


contract VaultManager {

  address[] private vaultAddressList;
  mapping (string => address) public vaultList;

  event VaultAdded(string name, string ipfsHash, address vaultAddress);

  function addNewVault(
    string memory _name,
    string memory _ipfsHash
  )
    public
    returns (address)
  {
    address _vaultAddress = createVault(_ipfsHash);

    vaultList[_name] = _vaultAddress;
    vaultAddressList.push(_vaultAddress);
    emit VaultAdded(_name, _ipfsHash, _vaultAddress);

    return _vaultAddress;
  }

  function getVaults()
    public
    view
    returns (address[] memory)
  {
    return vaultAddressList;
  }

  function createVault(string memory _ipfsHash)
    private
    returns (address _vaultAddress)
  {
    Vault vault = new Vault();
    vault.add(_ipfsHash);
    _vaultAddress = address(vault);
  }
}
