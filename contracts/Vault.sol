pragma solidity ^0.5.2;

contract Vault {

  string ipfsHash;

  event Added(string ipfsHash);

  function add(string memory _ipfsHash)
    public
  {
    ipfsHash = _ipfsHash;
    emit Added(_ipfsHash);
  }

  function get()
    public
    view
    returns (string memory)
  {
    return ipfsHash;
  }
}
