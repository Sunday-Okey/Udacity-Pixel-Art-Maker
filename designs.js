// Select color input
// Select size input

let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
const canvas = document.querySelector("#pixelCanvas");
const color = document.querySelector("#colorPicker");
const sizePicker = document.querySelector("#sizePicker");

// makeGrid
function makeGrid(height, width) {
  // Delete rows to begin
  while (canvas.rows.length > 0) {
    canvas.deleteRow(0);
  }

  //loop to insert rows and cells
  for (let y = 0; y < height; y++) {
    let row = canvas.insertRow(y);
    for (let x = 0; x < width; x++) {
      let cell = row.insertCell(x);

      // Add click events to the cells
      cell.addEventListener("click", function (event) {
        // When the cell is clicked, the background color changes to the selected color
        event.target.style.backgroundColor = color.value;
      });
      // When you right click on the selected colored cell, the background color changes to white or disappears
      cell.addEventListener("contextmenu", function (evt) {
        evt.preventDefault();
        cell.style.backgroundColor = "white";
      });
    }
  }
}

// Add click event to the submit button
sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  // When the form is submitted the makeGrid function is called
  makeGrid(height.value, width.value);
});
