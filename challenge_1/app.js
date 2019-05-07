let board = document.getElementsByClassName("square")

let counter = 1;
let active = true;
let xWins = 0;
let oWins = 0;
let prevWinner = '';

const updateSquareValue = function() {
    if (active) {
        let box = this.event.target.id;
        if(document.getElementById(box).innerHTML) {
            alert('spot has been claimed');
            return;
        }
    if (prevWinner === '' || prevWinner === 'O') {
        if(counter % 2 === 1) {
            document.getElementById(box).innerHTML = "X";
            counter++;
            checkForWinner();
        } else {
            document.getElementById(box).innerHTML = "O";
            counter++;
            checkForWinner();
        }
    } else {
        if(counter % 2 === 1) {
            document.getElementById(box).innerHTML = "O";
            counter++;
            checkForWinner();
        } else {
            document.getElementById(box).innerHTML = "X";
            counter++;
            checkForWinner();
        }
    }
    if (counter === 10 && document.getElementById('victory').innerHTML === "") {
        document.getElementById('victory').innerHTML = 'TIE GAME';
        }
    }
};

const reset = function() {
  for (var i = 0; i < board.length; i++) {
      board[i].innerHTML = '';
      counter = 1;
      document.getElementById('victory').innerHTML = "";
      active = true;
  }
}
const checkX = function(string) {
    if (string === 'X') {
        return true;
    }
};

const checkO = function(string) {
    if (string === 'O') {
        return true;
    }
};

const checkForWinner = function() {
    checkRows();
    checkColumns();
    checkDiagonals();

}

const checkRows = function() {
    let rowOne = [board[0].innerHTML, board[1].innerHTML, board[2].innerHTML];
    let rowTwo = [board[3].innerHTML, board[4].innerHTML, board[5].innerHTML];
    let rowThree = [board[6].innerHTML, board[7].innerHTML, board[8].innerHTML];

    if (rowOne.every(checkX) || rowTwo.every(checkX) || rowThree.every(checkX)) {
        document.getElementById('victory').innerHTML = "X WINS!  O IS A FOOL!";
        active = false;
        xWins++;
        document.getElementById('xwins').innerHTML = `X Wins: ${xWins}`;
        prevWinner = 'X';
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner}, O goes first`;
    };
    if (rowOne.every(checkO) || rowTwo.every(checkO) || rowThree.every(checkO)) {
        document.getElementById('victory').innerHTML = "O WINS!  X IS A FOOL!";
        active = false;
        oWins++;
        document.getElementById('owins').innerHTML = `O Wins: ${oWins}`;
        prevWinner = 'O';
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner}, X goes first`;
    };
};

const checkColumns = function() {
    let colOne = [board[0].innerHTML, board[3].innerHTML, board[6].innerHTML];
    let colTwo = [board[1].innerHTML, board[4].innerHTML, board[7].innerHTML];
    let colThree = [board[2].innerHTML, board[5].innerHTML, board[8].innerHTML];

    if (colOne.every(checkX) || colTwo.every(checkX) || colThree.every(checkX)) {
        document.getElementById('victory').innerHTML = "X WINS!  O IS A FOOL!";
        active = false;
        xWins++;
        document.getElementById('xwins').innerHTML = `X Wins: ${xWins}`;
        prevWinner = 'X';
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner}, O goes first`;
    };
    if (colOne.every(checkO) || colTwo.every(checkO) || colThree.every(checkO)) {
        document.getElementById('victory').innerHTML = "O WINS!  X IS A FOOL!";
        active = false;
        oWins++
        document.getElementById('owins').innerHTML = `O Wins: ${oWins}`;
        prevWinner = 'O';
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner}, X goes first`;
    };
};

const checkDiagonals = function() {
    let diagTop = [board[0].innerHTML, board[4].innerHTML, board[8].innerHTML];
    let diagBottom = [board[6].innerHTML, board[4].innerHTML, board[2].innerHTML];

    if (diagTop.every(checkX) || diagBottom.every(checkX)) {
        document.getElementById('victory').innerHTML = "X WINS!  O IS A FOOL!";
        active = false;
        xWins++;
        document.getElementById('xwins').innerHTML = `X Wins: ${xWins}`;
        prevWinner = 'X';
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner}, O goes first`;
    };
    if (diagTop.every(checkO) || diagBottom.every(checkO)) {
        document.getElementById('victory').innerHTML = "O WINS!  X IS A FOOL!";
        active = false;
        oWins++;
        document.getElementById('owins').innerHTML = `O Wins: ${oWins}`;
        prevWinner = 'O';
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner}, X goes first`;
    };
};

console.log('app is connected');