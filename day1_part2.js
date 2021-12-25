const fs = require("fs");

const input = fs.readFileSync("day1.txt", "utf-8").toString();

// const input = `199
// 200
// 208
// 210
// 200
// 207
// 240
// 269
// 260
// 263
// `;

function day1(input) {
  let ans = 0;

  let numbers = input
    .split("\n")
    .filter((num) => num !== "")
    .map((num) => parseInt(num));

  let i = 0;
  let k = 3;

  let sumsArray = [];

  let currSum = 0;
  let prevSum = 0;
  for (let j = 0; j < numbers.length; j++) {
    currSum += numbers[j];
    if (j - i + 1 === k) {
      if (prevSum < currSum) {
        ans++;
      }
      prevSum = currSum;
      currSum -= numbers[i];
      i++;
    }
  }

  console.log(ans - 1);
}

day1(input);
