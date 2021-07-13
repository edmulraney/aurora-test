require("dotenv").config();
const hre = require("hardhat");

async function decMul(liquityMathAddress) {
  liquityMathAddress = hre.ethers.utils.getAddress(liquityMathAddress);

  const LiquityMathFactory = await hre.ethers.getContractFactory("LiquityMath");
  const liquityMath = await LiquityMathFactory.attach(liquityMathAddress);
  console.log("calling decMul with 10, 15 in LiquityMath: ");
  const result = await liquityMath.decMul(10, 15);
  console.log(result.toString());
}

exports.decMul = decMul;
