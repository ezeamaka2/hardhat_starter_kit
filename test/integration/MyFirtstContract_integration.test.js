const {expect} = require('chai');
const chai = require('chai');
const BN = require('bn.js');


// Enable and inject BN dependency
chai.use(require('chai-bn')(BN));



describe("My First Contract Integration test", () => {
    before(async () => {
        MyFirstContract = await ethers.getContractFactory("MyFirstContract");
        mycontract = await MyFirstContract.deploy('0x9326BFA02ADD2366b30bacB125260Af641031331');

        await mycontract.deployed();
    })


    it("Price feed value greater than 0", async () => {
        let result = await mycontract.getLatestPrice();
        console.log("Latest ETH Price: " +  await new ethers.BigNumber.from(result._hex).toString())
        expect((await new ethers.BigNumber.from(result._hex).toString())).to.be.a.bignumber.that.is.greaterThan((await new ethers.BigNumber.from("0").toString()))
    })
})