pragma solidity >=0.4.21 <0.6.0;

interface IVault {
  function add(string calldata _ipfsHash)
    external;

  function get()
    external
    view
    returns (string memory);
}
