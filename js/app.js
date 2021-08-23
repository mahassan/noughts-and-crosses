const anchors = document.getElementsByTagName("a");
const boxes = document.getElementsByTagName("div");
const winnerDiv = document.getElementById("winner");
const iterableAnchor = [...anchors];
const iterableBoxes = [...boxes];

// 1 . user can click anywhere on board
// 2. when first player click he/she will have X and box will be disabled
let count = 0;
for (let i = 0; i < iterableAnchor.length; i++) {
  iterableAnchor[i].addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    if (count <= 9) {
      if (count % 2 == 0) {
        e.target.innerHTML = "o";
      } else {
        e.target.innerHTML = "X";
      }
    } else {
      boxes.innerHTML = "Ammar wins";
    }
  });
}
// 3. when second player click he/she will have O and box will be disabled
// 4. if X or 0 are in digonal, vertical, horizantal they win
// 5. Display who wins

// function clickedBox() {
//   for (let i = 0; i < iterableBoxes.length; i++) {
//     iterableBoxes[i].innerText = "hello";
//   }
// }
