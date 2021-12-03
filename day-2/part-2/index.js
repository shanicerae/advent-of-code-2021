const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const data = input.split("\n");

let horizontal = 0;
let depth = 0;
let aim = 0;

data.forEach((line) => {
  const [dir, num] = line.split(" ");
  const amount = Number(num);
  if (dir === "forward") {
    horizontal += amount;
    depth += aim * amount;
  } else {
    aim += dir === "up" ? amount * -1 : amount;
  }
});

console.log(horizontal * depth);
