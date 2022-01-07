const board = document.querySelectorAll('div');
let player = 1;
let playX = [];
let playO = [];
const winningArray = [123, 456, 789, 147, 258, 369, 357, 159];

////game logic
// function gameChoice() {
for (let i = 0; i < board.length; i++) {
  board[i].onclick = () => {
    console.log(i);
    if (player == 1) {
      board[i].style.backgroundImage =
        "url('/Users/starnesharussell/Downloads/Untitled design (5)/1.png')";
      // document.querySelector('h2').innerHTML = 'PLAYER 2';
      board[i].classList.add('play1');
      playX.push(i);
      // winner();
      player = 2;
    } else if (player == 2) {
      board[i].style.backgroundImage =
        "url('/Users/starnesharussell/Downloads/Untitled design (5)/2.png')";
      // document.querySelector('h2').innerHTML = 'PLAYER 1';
      board[i].classList.add('play2');
      playO.push(i);
      // winner();
      player = 1;
    }
  };
}
// }
// gameChoice();
////game winner
function winningChoice() {}
////turn game off
function turnGameOff() {}
