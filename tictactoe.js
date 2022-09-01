// Restart Game Button
var Restart = document.querySelector("#b");
Restart.addEventListener('click', ClearBoard);

// Grab all the squares
var squares = document.querySelectorAll('td');

// Clear all the squares
function ClearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

// Check the square marker
function ChangeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }
    else if (this.textContent === 'X') {
        this.textContent = 'O';
    }
    else {
        this.textContent = '';
    }
}
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', ChangeMarker)
}
// For loop to add event listeners to all the squares