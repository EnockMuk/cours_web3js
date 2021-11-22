const MonContract = artifacts.require("MonContract");

module.exports = function (deployer) {
  deployer.deploy(MonContract);
};
