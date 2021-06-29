let topLeftCell = document.querySelector(".top-left-cell");
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");

cellsContainer.addEventListener("scroll", function (e) {
  let topOffset = e.target.scrollTop;
  let leftOffset = e.target.scrollLeft;

  topRow.style.top = topOffset + "px";
  topLeftCell.style.top = topOffset + "px";
  topLeftCell.style.left = leftOffset + "px";
  leftCol.style.left = leftOffset + "px";
});

let allCells = document.querySelectorAll(".cell");

for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("blur", function (e) {
    // logic to save this value in db
    let rowId = e.target.getAttribute("rowid");
    let colId = e.target.getAttribute("colid");
    let cellValueFromUI = e.target.textContent;
    // cellObject ki value update !!
    let cellObject = db[rowId][colId];
    cellObject.value = cellValueFromUI;
  });
}
