// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract MyFirstContract {
    uint number;
    AggregatorV3Interface internal priceFeed;

    constructor(address _priceFeed) {
        number = 0;
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    function setNumber(uint _num) public {
        number = _num;
    }

    function getNumber() public view returns(uint){
        return number;
    }

    function getLatestPrice() public view returns (int) {
        (, int price, , , ) = priceFeed.latestRoundData();
        return price;
    }
}