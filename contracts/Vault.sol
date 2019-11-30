pragma solidity >=0.4.21 <0.6.0;

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
