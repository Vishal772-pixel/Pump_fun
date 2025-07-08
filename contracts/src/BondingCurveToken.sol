//SPDX-License-Identifier:MIT
 pragma solidity ^0.8.30;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BondingCurveToken is ERC20 {
    // owner of this token deployer
    address public creator ;

    // total token sold for price curve tracking
    uint256 public totalSold;

    //starting price per token 
    uint256 public immutable basePrice = 0.001 ether;

    //Price slope -- kitna price increase hoga with supply 
   uint256 public priceIncrement =0.0001 ether ;

 // Events for graph tracking and frontend

  event TokenBought (address indexed buyer, uint256 amount, uint256 price);
  event TokenSold ( address indexed seller , uint256 amount , uint256 price);


// constructor sets token sname and price 
constructor( string memory name_, string memory symbol_)ERC20(name_,symbol_){
   creator = msg.sender;

}//  Returns current price per token based on bonding curves
  function getCurrentPrice() public view returns(uint256){
    return baseprice +(priceIncrement*totalSupply());
//    return basePrice+(slope*totalSupply());

  }

  // User sends ETH to buy tokens at current price 
  function buy() external payable {
    require(msg.value>0,"Send ETH to buy token ");
    uint256 price = getCurrentPrice();

    // calculate how many tokens can be bought with sent ETH 
    uint256 amountToBuy = msg.value / price;
    require(amountToBuy>0,"Not enough ETH for 1 token");

// tranfer from creator to buyer (like decenetralised exchange)
   require(balanceOf(creator)>=amountToBuy, "Not enough tokns available");

  _transfer(creator,msg.sender,amountToBuy);
totalSold+=amountToBuy;
 emit TokenBought(msg.sender,amountToBuy,price);

}

// User can sell token and get back eth 
function sell(uint256 amount) external {
  require(balanceOf(msg.sender) >= amount, "You dont enough tokens");

  uint256 price = getCurrentPrice();
  uint256 ethToReturn = amount * price;

  require(address(this).balance >= ethToReturn, "Contract does not have enough");
  // Transfer tokens back to creator (like a buyback)
  _transfer(msg.sender, creator, amount);

totalSold -= amount;

  // send Eth back to seller 
  payable(msg.sender).transfer(ethToReturn);

  emit TokenSold(msg.sender, amount, price);
}


  // Creator can withdraw accumulated ETH from buys
  function withdraw() external {
require(msg.sender == creator,"Only creator can withdraw");
payable(creator).transfer(address(this).balance);


  }


// Accept plain ETH transfers (for buy/sell fallback )
 receive() external payable{}


  }
   




















}