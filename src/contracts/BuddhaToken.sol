// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BuddhaToken is Context, ERC20 {

    constructor () public ERC20("BuddhaToken", "BUD") {
        _mint(_msgSender(), 10000 * (10 ** uint256(decimals())));
    }
}