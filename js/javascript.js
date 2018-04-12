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

setGameElements();

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
    console.log(player.score);
    console.log(computer.score);
}

//function for counting points after each round 

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = "";
  
    var winnerIs = "player";
  
    if (playerPick === computerPick) {
          winnerIs = "noone"; // remis
    } else if (
          (computerPick === "rock" &&  playerPick === "scissors") ||
          (computerPick === "scissors" &&  playerPick === "paper") ||
          (computerPick === "paper" &&  playerPick === "rock")) {
  
          winnerIs = "computer";
    }
  
    if (winnerIs === "player") {
          playerResultElem.innerHTML = "Win!";
          player.score++;
          setGamePoints();
          //playerPointsElem.innerHTML = player.score;
          console.log(player.score);
    } else if (winnerIs === "computer") {
          computerResultElem.innerHTML = "Win!";
          computer.score++;
          setGamePoints();
          //computerPointsElem.innerHTML = computer.score;
          console.log(computer.score);
    }
theWinnerIs();
}

//function for updating scores on page

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}


//function for displaying the winner after reaching 10 points

function theWinnerIs () {
    if (player.score === 10) {
        alert("The winner is " + player.name);
        gameState = "ended";
        setGameElements();
        resetScores();
    } else if (computer.score === 10) {
        alert("The winner is computer");
        gameState = "ended";
        setGameElements();
        resetScores();
    }
}

//function for resetting scores after reaching 10 points and starting new game

function resetScores () {
    player.score = 0;
    playerPointsElem.innerHTML = player.score;
    computer.score = 0;
    computerPointsElem.innerHTML = computer.score;
}








