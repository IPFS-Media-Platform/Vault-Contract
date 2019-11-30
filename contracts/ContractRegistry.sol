pragma solidity >=0.4.21 <0.6.0;

contract ContractRegistry {
  mapping (string => address) private contractAddressList;

  event ContractAdded(string name, address indexed contractAddress);

  function addContract(
    string memory _name,
    address _address
  )
    public
  {
    contractAddressList[_name] = _address;
    emit ContractAdded(_name, _address);
  }

  function getContract(string memory _name)
    public
    view
    returns (address)
  {
    return contractAddressList[_name];
  }
}
