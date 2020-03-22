pragma solidity ^0.4.17;

contract Scrbac {

//  bool public status;
  address public owner;
//  string public organizationName;
  uint public userCounter;
  //uint public numberOfEndorsees;
  //mapping (address => uint) public userId;
  //mapping (address => uint) public endorsedUserId;
  mapping (uint => User) public users;
  //User[] public users;
//  Endorse[] public endorsedUsers;

  struct User {
      uint id;
      address user;
      string role;
      string notes;
      uint userSince;
  }

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
    require(msg.sender == owner);
    _;
    }

  //addUser
  function addUser(address _userAddress, string memory _userRole, string memory _userNotes) public {
        userCounter++;
        users[userCounter] = User({
          id: userCounter,
          user: _userAddress,
          userSince: now,
          role: _userRole,
          notes: _userNotes});
        emit userAdded(_userAddress, _userRole, _userNotes);
  }
  event userAdded(address UserAddress, string UserRole, string UserNotes);
  //

  function removeUser(address _userAddress) onlyOwner public {
    require(userId[userAddress] != 0);
    for (uint i = userId[userAddress]; i<users.length-1; i++){
        users[i] = users[i+1];
    }
    delete users[users.length-1];
    users.length--;
    emit UserRemoved(userAddress);
    numberOfUsers--;
}


  function getUsers() public view returns(uint[] memory){
    uint[] memory usersAdded = new uint[](userCounter);
    uint numberOfUsersAdded = 0;
    for(uint i = 1; i <= userCounter; i++){
      usersAdded[numberOfUsersAdded] = users[i].id;
      numberOfUsersAdded++;
    }
    return usersAdded;
  }

  // get number of users
  function getNumberOfUsers() public view returns (uint){
      return userCounter;
  }

}
