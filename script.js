const gameClick = document.querySelectorAll('div');
const win = document.getElementById('winner');

let player = 1;
let play1 = [];
let play2 = [];

function winner() {
  for (let y = 0; y < findWinner.length; y++) {
    let box = findWinner[y];
    if (box.every((o) => gameClick[o].classList.contains('play1'))) {
      win.innerHTML = 'PLAYER 1 WINS!';
      alert('Player 1 Wins!');
      window.location.href =
        '/Users/starnesharussell/ga_seir/unit1/homework/Connect-Four-Game/welcome.html';
    } else if (box.every((b) => gameClick[b].classList.contains('play2'))) {
      win.innerHTML = 'PLAYER 2 WINS!';
      alert('Player 2 Wins!');
      window.location.href =
        '/Users/starnesharussell/ga_seir/unit1/homework/Connect-Four-Game/welcome.html';
    }
  }
}

for (let i = 0; i < gameClick.length; i++) {
  gameClick[i].onclick = () => {
    if (
      gameClick[i + 7].classList.contains('dontClick') ||
      gameClick[i + 7].classList.contains('play1') ||
      gameClick[i + 7].classList.contains('play2')
    ) {
      if (player == 1) {
        gameClick[i].style.backgroundColor = 'red';
        document.querySelector('h2').innerHTML = 'PLAYER 2';
        gameClick[i].classList.add('play1');
        play1.push(i);
        winner();
        player = 2;
      } else if (player == 2) {
        gameClick[i].style.backgroundColor = 'black';
        document.querySelector('h2').innerHTML = 'PLAYER 1';
        gameClick[i].classList.add('play2');
        play2.push(i);
        winner();
        player = 1;
      }
    }
  };
}
