module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"

    }

  },

  contracts_directory: "./src/contracts",

  mocha: {

  },


  compilers: {
    solc: {
      version: "0.8.3",
    }
  },

  
  db: {
    enabled: false
  }
};
