import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
dotenv.config({ path: __dirname + '/.env' });

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import "hardhat-typechain";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-abi-exporter";

const INFURA_API_KEY = `${process.env.INFURA_API_KEY}`;
const MAINNET_PRIVATE_KEY = `${process.env.MAINNET_PRIVATE_KEY}`;
const CMC_API_KEY = `${process.env.CMC_API_KEY}`;
const ETHERSCAN_API_KEY = `${process.env.ETHERSCAN_API_KEY}`;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999
      }
    }
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5"
  },
  mocha: {
    timeout: 120000
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
    gasPrice: 60,
    coinmarketcap: `${CMC_API_KEY}`
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  abiExporter: {
    clear: true,
  },
  networks: {
    hardhat: {
      loggingEnabled: false,
      forking: {
        url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
        enabled: false
      }
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: [MAINNET_PRIVATE_KEY]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [MAINNET_PRIVATE_KEY]
    }
  },
  namedAccounts: {
    alice: {
      default: 2,
      1: '0x2648e99BC8eBf9164cFF4b0432D0522618E65241'
    },
    bob: {
      default: 3,
      1: '0x2648e99BC8eBf9164cFF4b0432D0522618E65241'
    },
    carol: {
      default: 4,
      1: '0x2648e99BC8eBf9164cFF4b0432D0522618E65241'
    },
    deployer: {
      default: 0,
      1: '0x2648e99BC8eBf9164cFF4b0432D0522618E65241',
      42: '0x2648e99BC8eBf9164cFF4b0432D0522618E65241'
    },
    SAPE: {
      1: 0x9061250C1E6c405BB6c1FbFEb2D41B84B32207ba
    },
  }
};

export default config;