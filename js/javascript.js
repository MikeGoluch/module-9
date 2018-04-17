//VARIABLES
//new game variable

var newGameBtn = document.getElementById("js-newGameButton");

//player pick variables

var pickRock = document.getElementById("js-playerPick_rock");
var pickPaper = document.getElementById("js-playerPick_paper");
var pickScissors = document.getElementById("js-playerPick_scissors");

//biginning stage variables

var gameState = "notStarted";  //started // ended
var player = { 
    name: "", 
    score: 0 
};
var computer = { 
    score: 0 
};

//display game variables

var newGameElem = document.getElementById("js-newGameElement");
var pickElem = document.getElementById("js-playerPickElement");
var resultsElem = document.getElementById("js-resultsTableElement");

//after game begin variables

var playerPointsElem = document.getElementById("js-playerPoints");
var playerNameElem = document.getElementById("js-playerName");
var computerPointsElem = document.getElementById("js-computerPoints");

//player&computer pick variables

var playerPickElem = document.getElementById("js-playerPick");
var computerPickElem = document.getElementById("js-computerPick");
var playerResultElem = document.getElementById("js-playerResult");
var computerResultElem = document.getElementById("js-computerResult");

//EVENTS
//new game button event

newGameBtn.addEventListener("click", newGame);

//player pick events

pickRock.addEventListener("click", function() { playerPick("rock") });
pickPaper.addEventListener("click", function() { playerPick("paper") });
pickScissors.addEventListener("click", function() { playerPick("scissors") });

//INITIALIZE

setGameElements();

//FUNCTIONS
//function for setting game elements in the beginning stage

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

//new game function

function newGame() {
    player.name = prompt("Please enter your name", "imię gracza");
    if (player.name) {
      player.score = computer.score = 0;
      gameState = "started";
      setGameElements();
  
      playerNameElem.innerHTML = player.name;
      //setGamePoints();
    }
}

//computer&player pick function

function getComputerPick() {
    var possiblePicks = ["rock", "paper", "scissors"];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//function for counting points after each round 

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = "";
  
    if (playerPick === computerPick) {
        drawScoreHtml(computerResultElem, playerResultElem)
    } else if (
        (computerPick === "rock" &&  playerPick === "scissors") ||
        (computerPick === "scissors" &&  playerPick === "paper") ||
        (computerPick === "paper" &&  playerPick === "rock")) {
        refreshScoreHtml(computerResultElem, computer);
    } else {refreshScoreHtml(playerResultElem, player)};

announceGameWinner();
}



//functions for adding and refreshing score on the html page

function refreshScoreHtml(someResultElem, object) {
    someResultElem.innerHTML = "Win!";
    object.score++;
    setGamePoints();
}

// function refreshPlayerScoreHtml(playerResultElem, player) {
//     playerResultElem.innerHTML = "Win!";
//     player.score++;
//     setGamePoints();
// }
// function refreshComputerScoreHtml(computerResultElem, computer) {
//     computerResultElem.innerHTML = "Win!";
//     computer.score++;
//     setGamePoints();
// }
function drawScoreHtml(computerResultElem, playerResultElem) {
    computerResultElem.innerHTML = playerResultElem.innerHTML = "Draw!";
}

//function for displaying the winner after reaching 10 points

function announceGameWinner() {
    if (player.score === 10) {
        alert("The winner is " + player.name);
        setGameAfterWin();
    } else if (computer.score === 10) {
        alert("The winner is computer");
        setGameAfterWin();
    }
}

//function for resetting scores after reaching 10 points and starting new game

function resetScores () {
    player.score = 0;
    playerPointsElem.innerHTML = player.score;
    computer.score = 0;
    computerPointsElem.innerHTML = computer.score;
}

function setGameAfterWin() {
    gameState = "ended";
    setGameElements();
    resetScores();
}

//function for updating scores on page

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}






