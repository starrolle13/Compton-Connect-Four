const gameClick = document.querySelectorAll('div');
const win = document.getElementById('winner');

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
