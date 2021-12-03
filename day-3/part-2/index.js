const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const data = input.split("\n").map((line) => line.split(""));

const _getCounts = (array, pos) =>
  array.reduce(
    (acc, curr) => {
      acc[curr[pos]]++;
      return acc;
    },
    { 0: 0, 1: 0 }
  );

let oCandidates = data;
let bitPos = 0;

while (oCandidates.length > 1 && bitPos <= data[0].length) {
  const counts = _getCounts(oCandidates, bitPos);
  const mostFrequent = counts[0] > counts[1] ? "0" : "1";
  oCandidates = oCandidates.filter((num) => num[bitPos] === mostFrequent);
  bitPos++;
}

let co2Candidates = data;
bitPos = 0;

while (co2Candidates.length > 1 && bitPos <= data[0].length) {
  const counts = _getCounts(co2Candidates, bitPos);
  const leastFrequent = counts[1] >= counts[0] ? "0" : "1";
  co2Candidates = co2Candidates.filter((num) => num[bitPos] === leastFrequent);
  bitPos++;
}

const oxygen = oCandidates[0].join("");
const co2 = co2Candidates[0].join("");

console.log(parseInt(oxygen, 2) * parseInt(co2, 2));
