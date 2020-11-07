
// store sizePicker and pixelCanvas in variables
const size = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

// create a listener for the sizePicker, and call the makeGrid()
size.addEventListener('submit', makeGrid);

// makeGrid() creates the grid
function makeGrid(event) {
  table.innerHTML = '';
  // store the height and weight selected in a couple of variables
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  // generate the grid using the height and width parameters
  for (let i = 0; i < height; i++) {
    let row = table.insertRow();
    for (let j = 0; j < width; j++) {
      let square = row.insertCell();

      // create a listener for the squares
      square.addEventListener('click', function(event) {
        // when the square is clicked, change its background color
        // to the value of that of the colorPicker
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  // needed to make the grid persistent on the page
  event.preventDefault();
}
};
