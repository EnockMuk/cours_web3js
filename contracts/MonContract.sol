// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract MonContract {

            uint256 index;
            mapping(uint256=>string)public noms;

            event MonEvenement(uint256 id, string noms,uint256 temps);
            function enregistrer(string memory _nom) external {
                    index++;
                    noms[index]=_nom;
                emit MonEvenement(index, _nom, block.timestamp);
            }

}