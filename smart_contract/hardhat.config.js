// https://eth-ropsten.alchemyapi.io/v2/HkqMISCU7PlrZ5AEbbiIxextgEmpRZ-5

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/HkqMISCU7PlrZ5AEbbiIxextgEmpRZ-5",
      accounts: [
        "dbd33a4e3f6077db4eb7800fba17fd7d332d13f449e517b0e1b42282081e7a85",
      ],
    },
  },
};
