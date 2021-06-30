let addSheetBtn = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");
let defaultSheet = document.querySelector(".sheet");
let sheetId = 0;

addSheetBtn.addEventListener("click", function () {
  addSheet();
});

defaultSheet.addEventListener("click", function () {
  switchSheet(defaultSheet);
});

function addSheet() {
  document.querySelector(".active-sheet").classList.remove("active-sheet");
  sheetId++;
  let sheetDiv = document.createElement("div");
  sheetDiv.classList.add("sheet");
  sheetDiv.classList.add("active-sheet");
  sheetDiv.setAttribute("sid", sheetId);
  sheetDiv.innerHTML = `Sheet ${sheetId + 1}`;
  sheetsList.append(sheetDiv);

  sheetDiv.addEventListener("click", function () {
    switchSheet(sheetDiv);
  });
}

function switchSheet(currentSheet) {
  if (currentSheet.classList.contains("active-sheet")) {
    return;
  }
  document.querySelector(".active-sheet").classList.remove("active-sheet");
  currentSheet.classList.add("active-sheet");
}
