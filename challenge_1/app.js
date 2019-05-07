let board = document.getElementsByClassName("square")

let counter = 1;
let active = true;
let xWins = 0;
let oWins = 0;
let prevWinner = '';
let playerOne = 'X';
let playerTwo = 'O';

const setName = function() {
    if (document.getElementById('player1').value) {
      playerOne = document.getElementById('player1').value;
      document.getElementById('xwins').innerHTML = playerOne;
    }
    if (document.getElementById('player2').value) {
      playerTwo = document.getElementById('player2').value;
      document.getElementById('owins').innerHTML = playerTwo;
    }
}

const updateSquareValue = function() {
    if (active) {
        let box = this.event.target.id;
        if(document.getElementById(box).innerHTML) {
            alert('spot has been claimed');
            return;
        }
    if (prevWinner === '' || prevWinner === playerTwo) {
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
        document.getElementById('victory').innerHTML = `${playerOne} WINS!  ${playerTwo} IS A FOOL!`;
        active = false;
        xWins++;
        document.getElementById('xwins').innerHTML = `${playerOne} Wins: ${xWins}`;
        prevWinner = `${playerOne}`;
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner} ... ${playerTwo} goes first`;
    };
    if (rowOne.every(checkO) || rowTwo.every(checkO) || rowThree.every(checkO)) {
        document.getElementById('victory').innerHTML = `${playerTwo} WINS!  ${playerOne} IS A FOOL!`;
        active = false;
        oWins++;
        document.getElementById('owins').innerHTML = `${playerTwo} Wins: ${oWins}`;
        prevWinner = `${playerTwo}`;
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner} ... ${playerOne} goes first`;
    };
};

const checkColumns = function() {
    let colOne = [board[0].innerHTML, board[3].innerHTML, board[6].innerHTML];
    let colTwo = [board[1].innerHTML, board[4].innerHTML, board[7].innerHTML];
    let colThree = [board[2].innerHTML, board[5].innerHTML, board[8].innerHTML];

    if (colOne.every(checkX) || colTwo.every(checkX) || colThree.every(checkX)) {
        document.getElementById('victory').innerHTML = `${playerOne} WINS!  ${playerTwo} IS A FOOL!`;
        active = false;
        xWins++;
        document.getElementById('xwins').innerHTML = `${playerOne} Wins: ${xWins}`;
        prevWinner = `${playerOne}`;
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner} ... ${playerTwo} goes first`;
    };
    if (colOne.every(checkO) || colTwo.every(checkO) || colThree.every(checkO)) {
        document.getElementById('victory').innerHTML = `${playerTwo} WINS!  ${playerOne} IS A FOOL!`;
        active = false;
        oWins++
        document.getElementById('owins').innerHTML = `${playerTwo} Wins: ${oWins}`;
        prevWinner = `${playerTwo}`;
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner} ... ${playerOne} goes first`;
    };
};

const checkDiagonals = function() {
    let diagTop = [board[0].innerHTML, board[4].innerHTML, board[8].innerHTML];
    let diagBottom = [board[6].innerHTML, board[4].innerHTML, board[2].innerHTML];

    if (diagTop.every(checkX) || diagBottom.every(checkX)) {
        document.getElementById('victory').innerHTML = `${playerOne} WINS!  ${playerTwo} IS A FOOL!`;
        active = false;
        xWins++;
        document.getElementById('xwins').innerHTML = `${playerOne} Wins: ${xWins}`;
        prevWinner = `${playerOne}`;
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner} ... ${playerTwo} goes first`;
    };
    if (diagTop.every(checkO) || diagBottom.every(checkO)) {
        document.getElementById('victory').innerHTML = `${playerTwo} WINS!  ${playerOne} IS A FOOL!`;
        active = false;
        oWins++;
        document.getElementById('owins').innerHTML = `${playerTwo} Wins: ${oWins}`;
        prevWinner = `${playerTwo}`;
        document.getElementById('prevwinner').innerHTML = `Previous Winner: ${prevWinner} ... ${playerOne} goes first`;
    };
};

console.log('app is connected');