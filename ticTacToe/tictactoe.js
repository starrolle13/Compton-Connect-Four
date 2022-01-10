const gameClick = document.querySelectorAll('div');
const win = document.getElementById('winner');
const ding = new Audio(
  '/Users/starnesharussell/Desktop/sei1213/unit1/projects/Compton-Connect-Four/mp3/app_alert_tone_020.mp3'
);
let player = 1;
let play1 = [];
let play2 = [];
/// winning array
const findWinner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];
///function to find winner
function winner() {
  for (let y = 0; y < findWinner.length; y++) {
    let box = findWinner[y];
    if (box.every((o) => gameClick[o].classList.contains('play1'))) {
      win.innerHTML = 'PLAYER 1 WINS!';
      turnOffGame();
    } else if (box.every((b) => gameClick[b].classList.contains('play2'))) {
      win.innerHTML = 'PLAYER 2 WINS!';
      turnOffGame();
    }
  }
}
///function to turn off game
function turnOffGame() {
  if (win.innerHTML == 'PLAYER 1 WINS!' || win.innerHTML == 'PLAYER 2 WINS!') {
    gameClick.forEach((click) => {
      click.classList.add('endGame');
    });
  }
}

///function to play game
function gamePlay() {
  for (let i = 0; i < gameClick.length; i++) {
    gameClick[i].onclick = () => {
      if (player == 1) {
        gameClick[i].style.backgroundImage =
          "url('/Users/starnesharussell/Downloads/Untitled design (5)/1.png')";
        ding.play();
        document.querySelector('h2').innerHTML = 'PLAYER 2';
        gameClick[i].classList.add('play1');
        // play1.push(i);
        winner();
        player = 2;
      } else if (player == 2) {
        gameClick[i].style.backgroundImage =
          "url('/Users/starnesharussell/Downloads/Untitled design (5)/2.png')";
        ding.play();
        document.querySelector('h2').innerHTML = 'PLAYER 1';
        gameClick[i].classList.add('play2');
        // play2.push(i);
        winner();
        player = 1;
      }
    };
  }
}

gamePlay();
