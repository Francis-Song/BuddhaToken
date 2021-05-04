const BuddhaToken = artifacts.require("BuddhaToken");

contract("BuddhaToken", () => {
    describe("Token deployment", async() => {
        it("name should be correct", async() => {
            const buddhaToken = await BuddhaToken.deployed()
            assert.equal(await buddhaToken.name(), "BuddhaToken")
        })
        it("symbol should be correct", async() => {
            const buddhaToken = await BuddhaToken.deployed()
            assert.equal(await buddhaToken.symbol(), "BUD")
        })
    })
})