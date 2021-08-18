const anchors = document.getElementsByTagName("a");
const boxes = document.getElementsByTagName("div");
const iterableAnchor = [...anchors];
const iterableBoxes = [...boxes];

for (let i = 0; i < iterableAnchor.length; i++) {
  iterableAnchor[i].addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.href = "#";
    if (i % 2 == 0) {
      e.target.innerText = "X";
      console.dir(e);
    } else {
      e.target.innerText = "0";
    }
  });
}

// function clickedBox() {
//   for (let i = 0; i < iterableBoxes.length; i++) {
//     iterableBoxes[i].innerText = "hello";
//   }
// }
