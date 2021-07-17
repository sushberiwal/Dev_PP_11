let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

bold.addEventListener("click", function () {
  handleMenuOptionsOne("bold");
});
italic.addEventListener("click", function () {
  handleMenuOptionsOne("italic");
});
underline.addEventListener("click", function () {
  handleMenuOptionsOne("underline");
});

function handleMenuOptionsOne(buttonClicked) {
  let cellObject = getCellObjectFromElement(lastSelectedCell);
  if (buttonClicked == "bold") {
    if (bold.classList.contains("active-menu")) {
      // already bold is active
      bold.classList.remove("active-menu");
      lastSelectedCell.style.fontWeight = "normal";
    } else {
      // bold is not active
      bold.classList.add("active-menu");
      lastSelectedCell.style.fontWeight = "bold";
    }
    cellObject.fontStyles.bold = !cellObject.fontStyles.bold;
  } else if (buttonClicked == "italic") {
    if (italic.classList.contains("active-menu")) {
      // already italic is active
      italic.classList.remove("active-menu");
      lastSelectedCell.style.fontStyle = "normal";
    } else {
      // italic is not active
      italic.classList.add("active-menu");
      lastSelectedCell.style.fontStyle = "italic";
    }
    cellObject.fontStyles.italic = !cellObject.fontStyles.italic;
  } else {
    if (underline.classList.contains("active-menu")) {
      // already underline is active
      underline.classList.remove("active-menu");
      lastSelectedCell.style.textDecoration = "none";
    } else {
      // underline is not active
      underline.classList.add("active-menu");
      lastSelectedCell.style.textDecoration = "underline";
    }
    cellObject.fontStyles.underline = !cellObject.fontStyles.underline;
  }
}
