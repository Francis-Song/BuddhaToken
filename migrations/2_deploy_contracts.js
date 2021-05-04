const BuddhaToken = artifacts.require("BuddhaToken");

module.exports = function (deployer) {
  deployer.deploy(BuddhaToken);
};
