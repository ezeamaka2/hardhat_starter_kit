task("read-value", "Print the value of my number")
  .addParam("contract", "The contract address")
  .setAction(async (taskArgs) => {
      const mycontractAddress = taskArgs.contract;
      const MyContract = await ethers.getContractFactory("MyFirstContract");

      const accounts = await ethers.getSigners();
      const signer = accounts[0];
      const myFirstContract = await new ethers.Contract(mycontractAddress, MyContract.interface, signer);

      let result = BigInt(await myFirstContract.getNumber()).toString();


    console.log("The current stored value is: "+ result);
  });


task("set-value", "Set the value of my number")
  .addParam("contract", "The contract address")
  .addParam("value", "Add value")
  .setAction(async (taskArgs) => {
      const mycontractAddress = taskArgs.contract;
      const value = taskArgs.value;
      const MyContract = await ethers.getContractFactory("MyFirstContract");

      const accounts = await ethers.getSigners();
      const signer = accounts[0];
      const myFirstContract = await new ethers.Contract(mycontractAddress, MyContract.interface, signer);

      let result = await myFirstContract.setNumber(value);


    console.log("New value set to: "+ value);
  });

  task("read-price", "Get the price of Ethereum")
  .addParam("contract", "The contract address")
  .setAction(async (taskArgs) => {
      const mycontractAddress = taskArgs.contract;
      const MyContract = await ethers.getContractFactory("MyFirstContract");

      const accounts = await ethers.getSigners();
      const signer = accounts[0];
      const myFirstContract = await new ethers.Contract(mycontractAddress, MyContract.interface, signer);

      let result = await myFirstContract.getLatestPrice();


    console.log("The latest price of ETH is: "+ result);
  });

module.exports = {};