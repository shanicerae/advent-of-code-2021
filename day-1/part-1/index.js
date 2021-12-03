const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const data = input.split("\n").map(Number);

let count = 0;
data.forEach((value, i) => {
  if (i > 0 && value > data[i - 1]) {
    count++;
  }
});
console.log(count);
