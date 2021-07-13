task("totalSupply", "Total supply of ERC20 token")
  .addParam("token", "Token address")
  .setAction(async function ({ token }, { ethers: { getSigners } }, runSuper) {
    const watermelonToken = await ethers.getContractFactory("WatermelonToken");
    console.log("token", token);
    const watermelon = watermelonToken.attach(token);
    const [minter] = await ethers.getSigners();
    const totalSupply = (
      await watermelon.connect(minter).totalSupply()
    ).toNumber();
    console.log(`Total Supply is ${totalSupply}`);
  });

module.exports = {};
