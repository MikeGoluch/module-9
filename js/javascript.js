//new game button

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

//player pick

var pickRock = document.getElementById('js-playerPick_rock')
var pickPaper = document.getElementById('js-playerPick_paper')
var pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//basic score

var gameState = 'notStarted';  //started // ended
var player = { name: '', score: 0 };
var computer = { score: 0 };

//display game elements

var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
      case 'started':
          newGameElem.style.display = 'none';
          pickElem.style.display = 'block';
          resultsElem.style.display = 'block';
        break;
      case 'ended':
          newGameBtn.innerText = 'Jeszcze raz';
      case 'notStarted':
      default:
          newGameElem.style.display = 'block';
          pickElem.style.display = 'none';
          resultsElem.style.display = 'none';
    }
  }