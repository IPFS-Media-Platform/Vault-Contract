pragma solidity >=0.4.21 <0.6.0;

import "./Vault.sol";


contract VaultManager {
  mapping (string => address) public vaultList;

  event VaultAdded(string name, address vaultAddress);

  function addNewVault(
    string memory _name
  )
    public
    returns (address)
  {
    address _vaultAddress = createVault();

    vaultList[_name] = _vaultAddress;

    emit VaultAdded(_name, _vaultAddress);

    return _vaultAddress;
  }

  function createVault()
    private
    returns (address _vaultAddress)
  {

    _vaultAddress = address(new Vault());
  }
}
