let board = document.getElementsByClassName("square")

console.log(board);
// [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ];

// document.addEventListener('click', function(event) {
//     if (!event.target.matches('.square')) {
//         return;
//     }
//     event.preventDefault();
//     console.log(event.target);
// })

let counter = 1;

updateSquareValue = function() {
    let box = this.event.target.id;
    if(counter % 2 === 1) {
      document.getElementById(box).innerHTML = "X";
      counter++;
    } else {
      document.getElementById(box).innerHTML = "O";
      counter++;
    }
};

reset = function() {
  for (var i = 0; i < board.length; i++) {
      board[i].innerHTML = '';
  }
}

console.log('app is connected');