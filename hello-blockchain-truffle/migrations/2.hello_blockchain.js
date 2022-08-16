const helloBlockChain = artifacts.require("HelloBlockChain");

module.exports = function (deployer) {
    deployer.deploy(helloBlockChain);
};
