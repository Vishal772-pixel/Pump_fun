//SPDX-License-Identifier:MIT
pragma solidity ^0.8.30;

import "./BondingCurveToken.sol";

contract TokenFactory {
    mapping(string=>address) public tokenByName;
    address[]public allTokens;


    uint256 public constant LAUNCH_PRICE_PER_TOKEN=0.00001 ether;
     event TokenLaunched(address indexed token, address indexed creator,string name, string symbol, uint256 supply);
      function createToken(string memory name,string memory symbol,uint256 supply)external payable{

        require(tokenByName[name]==address(0),"Token already exist");
        require(supply>0,"Invalid supply");

        uint256 requiredETH = supply*LAUNCH_PRICE_PER_TOKEN;
        require(msg.value>=requiredETH,"not enough ETH to Launch token ");

        BondingCurveToken token= new BondingCurveToken(name,symbol);

        tokenByName[name]=address(token);
        allTokens.push(address(token));


        //Mint total supply to creator 
        token.transfer(msg.sender,supply);


        emit TokenLaunched(address(token),msg.sender,name,symbol,supply);



    

      }

    function getAllTokens() external view returns(address[]memory){
            return allTokens;
        }


}