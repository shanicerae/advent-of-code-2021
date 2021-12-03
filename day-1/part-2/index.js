const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const data = input.split("\n").map(Number);

let count = 0;
for (let i = 0; i < data.length - 3; i++) {
  const window = data[i] + data[i + 1] + data[i + 2];
  const nextWindow = data[i + 1] + data[i + 2] + data[i + 3];
  if (nextWindow > window) {
    count++;
  }
}
console.log(count);
