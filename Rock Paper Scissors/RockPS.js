let userScore = 0;
let botScore = 0;

//Using Object for ScoreBoard
let scoreBoard = {
  round: 0,
  win: 0,
  tie: 0,
  lost: 0,
  displayScoreBoard: function () {
    document.querySelector("#board").innerText = "Score Board";
    document.querySelector("#scoreBoard").innerText =
      `Round: ${scoreBoard.round} -- Win: ${scoreBoard.win} -- Tie: ${scoreBoard.tie} -- Lost: ${scoreBoard.lost}`;
  },
  displayScoreBoardReset: function () {
    document.querySelector("#board").innerText = "";
    document.querySelector("#scoreBoard").innerText = ``;
  },
};

function game(x) {
  let userVal = x;
  let y = Math.random();
  let botVal;
  if (y < 0.33) {
    botVal = "rock";
  } else if (y < 0.66) {
    botVal = "paper";
  } else {
    botVal = "scissor";
  }

  scoreBoard.round++; // this line for updating value in object scoreBoard

  document.querySelector("#userdisplay").innerText = userVal;
  document.querySelector("#botdisplay").innerText = botVal;
  let winner = document.querySelector("#winsdisplay");

  let playerScore = document.querySelector("#userScore");
  let computerScore = document.querySelector("#botScore");

  if (userVal == botVal) {
    scoreBoard.tie++; // this line for updating value of tie in object scoreBoard
    winner.innerText = "TIE";
    document.querySelector("#winsdisplay").style.backgroundColor = "yellow";
  } else if (
    (userVal == "rock" && botVal == "scissor") ||
    (userVal == "paper" && botVal == "rock") ||
    (userVal == "scissor" && botVal == "paper")
  ) {
    winner.innerText = userVal;
    scoreBoard.win++; // this line for updating value of win in object scoreBoard
    userScore++;
    playerScore.innerText = "You: " + userScore;
    document.querySelector("#winsdisplay").style.backgroundColor = "teal";
  } else {
    winner.innerText = botVal;
    scoreBoard.lost++; // this line for updating value of lost in object scoreBoard
    botScore++;
    computerScore.innerText = "Bot: " + botScore;
    document.querySelector("#winsdisplay").style.backgroundColor = "turquoise";
  }

  console.log(scoreBoard); // to check the object values changing in console log

  //Displaying Object data on screen once user start playing game
  scoreBoard.displayScoreBoard(); //instead of writing display code here, we can ecapsulate everything related to scoreBoard in scoreBoard object,
  // Even the display function,  doing that we only need to call the display function here instead of writing the two lines below which have been put in comment
  //  document.querySelector('#board').innerText='Score Board';
  //   document.querySelector("#scoreBoard").innerText = `Round: ${scoreBoard.round} -- Win: ${scoreBoard.win} -- Tie: ${scoreBoard.tie} -- Lost: ${scoreBoard.lost}`;
}

function reset() {
  userScore = 0;
  botScore = 0;
  document.querySelector("#userScore").innerText = "You: " + userScore;
  document.querySelector("#botScore").innerText = "Bot: " + botScore;
  document.querySelector("#userdisplay").innerText = "You";
  document.querySelector("#botdisplay").innerText = "Bot";
  document.querySelector("#winsdisplay").innerText = "wins";
  document.querySelector("#winsdisplay").style.backgroundColor =
    "rgb(143, 213, 45)";

  //Resetting the values of object
  scoreBoard.round = 0;
  scoreBoard.lost = 0;
  scoreBoard.tie = 0;
  scoreBoard.win = 0;

  //(keep this line below if want to keep scoreboard content displayin on the screen after values resetting to 0)
  scoreBoard.displayScoreBoard();  // calling display method from scoreBoard object again after resetting the values of object to 0.

  //this line below is another display method(function) for scoreboard but it will disappear the scoreboard content after reset
  //scoreBoard.displayScoreBoardReset();

  //(instead of writing these two lines below for scoreboard reset we are putting it into the object of scoreboard and calling it here like above
  // two object method call above i.e. scoreBoard.displayScoreBoard();  or scoreBoard.displayScoreBoardReset(); )
  
  //document.querySelector('#board').innerText='';
  //document.querySelector("#scoreBoard").innerText = ``;
}
