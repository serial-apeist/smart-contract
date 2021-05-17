import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, getChainId } = hre;
	const { deploy, execute } = deployments;
	const chainId = await getChainId();

	let { deployer } = await getNamedAccounts();

	const SAPE = await deploy('SAPE', {
		from: deployer,
		log: true,
		contract: 'SAPE',
	});
};

export default func;
func.tags = ['sape', 'live'];
