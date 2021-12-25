const fs = require("fs");

const input = fs.readFileSync("day4.txt", "utf-8").toString();

const lines = input.split("\n\n");

let [drawnNumbers, ...boards] = lines;

drawnNumbers = drawnNumbers.split(",").map((num) => parseInt(num));

boards = boards.map((board) => {
  return {
    numbers: board
      .replace(/\n/g, " ")
      .split(" ")
      .filter((nums) => nums !== "")
      .map((num) => parseInt(num)),
    rows: Array(5).fill(0),
    columns: Array(5).fill(0),
  };
});

let winningBoard;
let winningNumber;
let won = false;
for (let i = 0; i < drawnNumbers.length; i++) {
  for (let board of boards) {
    board["numbers"] = board["numbers"].map((num, index) => {
      if (num === drawnNumbers[i]) {
        board["rows"][Math.floor(index / 5)]++;
        board["columns"][index % 5]++;
        if (
          board["rows"][Math.floor(index / 5)] === 5 ||
          board["columns"][index % 5] === 5
        ) {
          won = true;
          winningBoard = board;
          winningNumber = num;
        }
        return num * -1;
      } else {
        return num;
      }
    });
  }
  if (won) {
    break;
  }
}

console.log(
  winningBoard["numbers"].filter((num) => num > 0).reduce((a, b) => a + b, 0) *
    winningNumber
);
