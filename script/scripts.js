async function main() {
    // We get the contract to deploy
    const MyContract = await ethers.getContractFactory("MyFirstContract");
    const mycontract = await MyContract.deploy('0x9326BFA02ADD2366b30bacB125260Af641031331');
  
    console.log("MyFirstContract deployed to:", mycontract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });