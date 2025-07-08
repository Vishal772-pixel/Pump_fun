//SPDX-License-Identifier:MIT
pragma solidity ^0.8.30;

import "forge-std/Test.sol";
import "../src/BondingCurveToken.sol";

contract BondingTokenTest is Test{

    BondingCurveToken token;
    address user = address(1);

    function setUp() public {
        token= new BondingCurveToken("TEST","TST");

    vm.deal(user,1 ether);
    }

    function testBuySell() public{
        vm.prank(user);
        token.buy{value:0.01 ether }();

        uint256 bal = token.balanceOf(user);
        assertGt(bal,0);

        vm.prank(user);
        token.sell(bal);

    }
}