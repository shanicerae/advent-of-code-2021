const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const data = input.split("\n");

const counts = data.reduce((acc, curr) => {
  const bits = curr.split("");
  bits.forEach((value, index) => {
    if (!acc[index]) {
      acc[index] = {};
    }

    if (acc[index][value]) {
      acc[index][value]++;
    } else {
      acc[index][value] = 1;
    }
  });
  return acc;
}, {});

const gammaRate = Object.keys(counts)
  .map((index) => (counts[index][0] > counts[index][1] ? 0 : 1))
  .join("");
const epsilonRate = Object.keys(counts)
  .map((index) => (counts[index][1] > counts[index][0] ? 0 : 1))
  .join("");

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
