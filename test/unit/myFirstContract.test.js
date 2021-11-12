const {expect} = require('chai');


describe("My First Contract unit test", () => {
    before(async () => {
        MyFirstContract = await ethers.getContractFactory("MyFirstContract");
        mycontract = await MyFirstContract.deploy('0x9326BFA02ADD2366b30bacB125260Af641031331');

        await mycontract.deployed();
    })

    beforeEach(async () => {
        await mycontract.setNumber(0);
    });

    it("Initial value is set to 0", async () => {
        expect((await mycontract.getNumber()).toString()).to.equal("0")
    })

    it("Retrieve returns the previous value that was stored", async () => {
        await mycontract.setNumber(60);
        expect((await mycontract.getNumber()).toString()).to.equal("60")
    })
})