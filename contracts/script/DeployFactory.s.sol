//SPDX-License-Identifier:MIT

pragma solidity ^0.8.30;

import {Script} from "forge-std/Script.sol";
import "../src/TokenFactory.sol";

contract DeployFactory is Script 
{
    function run () external {
        vm.startBroadcast();
        new TokenFactory();
        vm.stopBroadcast();
    }
}