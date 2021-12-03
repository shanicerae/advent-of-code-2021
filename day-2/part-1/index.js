const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const data = input.split("\n");

let horizontal = 0;
let depth = 0;

data.forEach((line) => {
  const [dir, num] = line.split(" ");
  const amount = Number(num);
  if (dir === "forward") {
    horizontal += amount;
  } else {
    depth += dir === "up" ? amount * -1 : amount;
  }
});

console.log(horizontal * depth);
