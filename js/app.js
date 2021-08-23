const anchors = document.getElementsByTagName("a");
const boxes = document.getElementsByTagName("div");
const winnerDiv = document.getElementById("winner");
const iterableAnchor = [...anchors];
const iterableBoxes = [...boxes];

// 1 . user can click anywhere on board
// 2. when first player click he/she will have X and box will be disabled
let count = 0;
let board = [];
for (let i = 0; i < iterableAnchor.length; i++) {
  iterableAnchor[i].addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    if (count <= 9) {
      if (count % 2 == 0) {
        e.target.innerHTML = "o";
        board.push("o");
      } else {
        e.target.innerHTML = "X";
        board.push("X");
      }
    }
    if (count == 2) {
      if (board[0] == "X" && board[2] == "X") {
        winnerDiv.innerText = "X wins";
      }
    }
    console.log(board);
  });
}
// 3. when second player click he/she will have O and box will be disabled
// 3.1. if the count is 2 check for both element innerText

// 3.2 if both is X then X wins otherwise it looses
//thought - maybe we need array and push each element into that array
//if that array as x next to each other, they win

// 4. if X or 0 are in digonal, vertical, horizantal they win
// 5. Display who wins

// function clickedBox() {
//   for (let i = 0; i < iterableBoxes.length; i++) {
//     iterableBoxes[i].innerText = "hello";
//   }
// }
