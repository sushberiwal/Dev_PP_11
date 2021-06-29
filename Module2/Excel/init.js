let cellsContainer = document.querySelector(".cells");

function initCells() {
  let cellsContent = '<div class="top-left-cell"></div>';

  cellsContent += '<div class="top-row">';
  for (let j = 0; j < 26; j++) {
    cellsContent += `<div class="top-row-cell">${String.fromCharCode(65+j)}</div>`;
  }
  cellsContent += "</div>";

  cellsContent += '<div class="left-col">';
  for (let j = 0; j < 100; j++) {
    cellsContent += `<div class="left-col-cell">${j + 1}</div>`;
  }
  cellsContent += "</div>";

  cellsContent += '<div class="all-cells">';
  for (let i = 0; i < 100; i++) {
    cellsContent += '<div class="row">';
    for (let j = 0; j < 26; j++) {
      cellsContent += `<div class="cell" contenteditable="true"></div>`;
    }
    cellsContent += "</div>";
  }
  cellsContent += "</div";
  cellsContainer.innerHTML = cellsContent;
}
initCells();
