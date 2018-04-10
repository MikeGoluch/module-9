//new game button

var newGameBtn = document.getElementById("js-newGameButton");

newGameBtn.addEventListener("click", newGame);

//player pick

var pickRock = document.getElementById("js-playerPick_rock");
var pickPaper = document.getElementById("js-playerPick_paper");
var pickScissors = document.getElementById("js-playerPick_scissors");

pickRock.addEventListener("click", function() { playerPick("rock") });
pickPaper.addEventListener("click", function() { playerPick("paper") });
pickScissors.addEventListener("click", function() { playerPick("scissors") });

//basic score

var gameState = "ended";  //started // ended
var player = { name: "", score: 0 };
var computer = { score: 0 };

//display game elements

var newGameElem = document.getElementById("js-newGameElement");
var pickElem = document.getElementById("js-playerPickElement");
var resultsElem = document.getElementById("js-resultsTableElement");

function setGameElements() {
    switch(gameState) {
      case "started":
          newGameElem.style.display = "none";
          pickElem.style.display = "block";
          resultsElem.style.display = "block";
        break;
      case "ended":
          newGameBtn.innerText = "Play again";
      case "notStarted":
      default:
          newGameElem.style.display = "block";
          pickElem.style.display = "none";
          resultsElem.style.display = "none";
    }
}

setGameElements();

//game begin

var playerPointsElem = document.getElementById("js-playerPoints");
var playerNameElem = document.getElementById("js-playerName");
var computerPointsElem = document.getElementById("js-computerPoints");

function newGame() {
    player.name = prompt("Please enter your name", "imię gracza");
    if (player.name) {
      player.score = computer.score = 0;
      gameState = "started";
      setGameElements();
  
      playerNameElem.innerHTML = player.name;
      // setGamePoints(); // This function has not been created yet
    }
  
  }

  //player pick

  function playerPick(playerPick) {
    console.log(playerPick);
}

//computer pick

function getComputerPick() {
    var possiblePicks = ["rock", "paper", "scissors"];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

var playerPickElem = document.getElementById("js-playerPick");
var computerPickElem = document.getElementById("js-computerPick");
var playerResultElem = document.getElementById("js-playerResult");
var computerResultElem = document.getElementById("js-computerResult");

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}