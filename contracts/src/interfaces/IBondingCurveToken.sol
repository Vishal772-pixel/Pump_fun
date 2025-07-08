//SPDX-License-Identifier:MIT
pragma solidity ^0.8.30;

interface IBondingCurveToken{
    function buy() external payable;
    function sell (uint256 amount) external;
    function getCurrentPrice() external view returns (uint256);
    function withdraw() external;
}