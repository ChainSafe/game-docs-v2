---
slug: /current/minting-nft
sidebar_position: 10
sidebar_label: Minting NFT
---


# Minting NFTs
## Minting an NFT Via The Marketplace
NFTs can easily be minted via our marketplace [here](https://marketplace.chainsafe.io/) These NFTs follow ERC standards and be used with our all NFT calls without much hassle at all. Simply add your NFT details, an image and away you go!

## Minting an NFT In Game Via ECDSA Verification
We've decided to move away from server voucher minting and replace it with ECDSA verification. This is a lot easier to setup and maintain as it's done solidity side and can be controlled solely by the developer for their users. For examples sake we've included an ERC20 private key to show you how it all works. Please do not use this in production. You can generate your own key [here](https://vanity-eth.tk/) to replace the example one. It is entirely up to you how you would like to secure this key, Please do not send an app into production without locking this down properly. As there are many ways to secure this we've decided to leave this up to you as any methods we offer would undoubtedly be reverse engineered.

## What Is ECDSA?
ECDSA stands for elliptical curve digital signature algorithm. It is the process of reverse engineering a signature to check which wallet it originated from. This way you can place a private key within the game files and make it fire off a signature whenever you need something authorized. This can be anything from allowing a claim to minting NFTs, the possibilities are endless. More information can be found [here](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages)

## Using ECDSA With A Private Key In Unity
The sign with private key methods may be used here to generate a signature from your authorization wallet. This can then passed into a function and read solidity side as bytes. You may then use the functions below solidity side to reverse engineer the signature via ECDSA to check that it has actually originated from your authorization wallet. In the next step we'll show you how this can be checked solidity side.

## Passing The signature Into A Transaction For Verification Purposes In A Solidity Contract
```solidity
     // SPDX-License-Identifier: MIT
     pragma solidity ^0.8.19;
     import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
     import "@openzeppelin/contracts/utils/Strings.sol";

     contract ExampleContract is ReentrancyGuard {
        /// @dev Variables & mappings
        authWallet = "Your auth wallet here";
        mapping(uint256 => address) public userWalletScores;

        /// @dev Example function for saving a score
        function saveScore(uint _score, bytes memory _sig) external nonReentrant() returns (bool) {
            bytes32 messageHash = getMessageHash(Strings.toString(_score));
            bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);
            require(recover(ethSignedMessageHash, _sig) == authWallet, "Sig not made by auth");
            // Add score to wallet mapping
            userWalletScores[_score] = msg.sender;
            return true;
        }

        /// @dev Used for ECDSA verification to check if values came from a specific address following solidity standards
        function VerifySig(address _signer, string memory _message, bytes memory _sig) external pure returns (bool) {
            bytes32 messageHash = getMessageHash(_message);
            bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);
            return recover(ethSignedMessageHash, _sig) == _signer;
        }

        function getMessageHash(string memory _message) internal pure returns (bytes32) {
            return keccak256(abi.encodePacked(_message));
        }

        function getEthSignedMessageHash(bytes32 _messageHash) internal pure returns (bytes32) {
            return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32",_messageHash));
        }

        function recover(bytes32 _ethSignedMessageHash, bytes memory _sig) internal pure returns (address) {
            (bytes32 r, bytes32 s, uint8 v) = _split(_sig);
            return ecrecover(_ethSignedMessageHash, v, r, s);
        }

        function _split (bytes memory _sig) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
            require(_sig.length == 65, "Invalid signature length");
            assembly {
                r := mload(add(_sig, 32))
                s := mload(add(_sig, 64))
                v := byte(0, mload(add(_sig, 96)))
            }
        }
    }
```

Adding the above require function with the methods below it will enable a function to check the origin of a signature. If the origin matches your defined address in the require step, the call will pass, If not it will fail. This adds a much needed layer of security to sensitive transactions.
