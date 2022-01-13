# hardhat_starter_kit

This is a **Hardhat Starter Kit**

to run the code - simply clone this repo to your local machine

1. In the .env file, replace with your private key and remote kovan network (I used Alchemy, you can also use infura)
2. Open the package.json file and install all the dependencies one by one
3. run *np hardhat compile* to compile the code
4. run *npx hardhat run --network kovan script/scripts.js* to deploy the code. You can copy the deployed address to [Kovan Etherscan](https://kovan.etherscan.io) to see the transaction

to run the task - In this smart_contract, I have there tasks
- The first **Reads the value from the getNumber function**
- The second **Set the value with the setNumber function**
- The third **Gets the current value of Eth use Chainlink priceFeed**

To run the task = use *npx hardhat* to see the list of all the available tasks
- To read the value: *npx hardhat read-value --contract contract_address*
- to set the value: *npx hardhat set-value --contract contract_address new_value*
- to see the current ETH price: *npx hardhat read-price --contract contract_address*

**To Run the TEST**
run *npx hardhat test*

Thanks you
