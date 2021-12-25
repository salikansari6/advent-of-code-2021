const fs = require("fs");

// const input = fs.readFileSync("day1.txt", "utf-8").toString();

const input = `199
200
208
210
200
207
240
269
260
263
`;

function day1(input) {
  let ans = 0;

  let prevNum = 0;
  input.split("\n").forEach((num) => {
    if (num > prevNum) {
      ans++;
    }
    prevNum = num;
  });

  console.log(ans);
}

day1(input);
