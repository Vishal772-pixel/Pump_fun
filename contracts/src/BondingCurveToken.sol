//SPDX-License-Identifier:MIT
 pragma solidity ^0.8.30;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BondingCurveToken is ERC20 {
    // owner of this token deployer
    address public owner ;

    // total token sold for price curve tracking
    uint256 public totalSold;

    //starting price per token 
    uint256 public basePrice = 0.001 ether;

    //Price slope -- kitna price increase hoga with supply 
   uint256 public slope =0.0001 ether ;

// constructor sets token sname and price 
constructor( string memory name_, string memory symbol_)ERC20(name_,symbol_){
   owner = msg.sender;

}//  Returns current price per token based on bonding curves
  function getCurrentPrice() public view returns(uint256){
   return basePrice+(slope*totalSupply());


  }
  // User sends ETH to buy tokens at current price 
  function buy() external payable {
    require(msg.value>0,"Send ETH to buy token ");
    uint256 price = getCurrentPrice();
  }
   




















}