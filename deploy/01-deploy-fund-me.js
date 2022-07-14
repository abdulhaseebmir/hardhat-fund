module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = getNamedAccounts()
    const chainId = networks.config.chainId
}