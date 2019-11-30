pragma solidity >=0.4.21 <0.6.0;

interface IContractRegistry {
  function addContract(string calldata _name, address _address)
    external;

  function getContract(string calldata _name)
    external
    view
    returns (address);
}
