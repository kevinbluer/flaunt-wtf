// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Flaunt is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _id;

    constructor() ERC721("Flaunt", "WTF") public {
        _setBaseURI("ipfs://");
    }

    function mint(address owner, string memory cid) public returns (uint256)
    {
        // TODO check minter is the owner of the original

        _id.increment();

        uint256 newId = _id.current();
        _mint(owner, newId);
        _setTokenURI(newId, cid);

        return newId;
    }
}
