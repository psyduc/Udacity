// Select color input
var color;
// Select size input
var width, height, table;


// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!

	width = document.getElementById('inputWidth').value;
	height = document.getElementById('inputHeight').value;
	table = document.getElementById('pixelCanvas');
	var row = document.getElementsByTagName('tr');
	var cell = document.getElementsByTagName('td');

	//need to clear out the table 

	if(table.hasChildNodes){
		table.innerHTML = '';
	}


	for(var i = 0; i < height; i++) {
		table.insertRow();
		for(var j = 0; j < width; j++) {
			row[i].insertCell(j).setAttribute('onClick', 'addColor(this)')
		}
	}

}

function addColor(tile) {
	color = document.getElementById('colorPicker').value;
	tile.style.background = color;
}


$('form').submit(function(e)
{
e.preventDefault();
})