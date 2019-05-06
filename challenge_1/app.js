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

updateSquareValue = function() {
    let box = this.event.target.id;
    document.getElementById(box).innerHTML = "X"
}

console.log('app is connected');