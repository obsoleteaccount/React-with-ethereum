pragma solidity ^0.4.25;

contract Lottery{
    address public manager;
    address[] public players;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function enter() public payable {
     //   if (msg.value == 1){
        require(msg.value > .01 ether);

        players.push(msg.sender);
     //   }
    }

    function pickWinner() public restricted {
   //     require(msg.sender == manager);
        uint index = random()%players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    // function returnEntries() public restricted{

    // }

    function random() private view returns(uint){
        return uint(keccak256(block.difficulty, now, players));
    }

    function getPlayers() public view returns(address[]) {
        return players;
    }
}
