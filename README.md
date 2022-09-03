# hardhat_starter_kit

This is a **Hardhat Starter Kit**

to run the code - simply clone this repo to your local machine

1. In the .env file, replace the private key with your private key and remote kovan network (I used Alchemy, you can also use infura)
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


# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

If you have a contructor that takes in a parameter, you need to add it. For example, in the case, the constructor takes in a string
```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```


Thanks you
