// The let variable defines player one and twos html elements and starts with player 1 



let player1Points = 1000;
let player2Points = 1000;
let currentPlayer = 1; // Start with Player 1

// both playerscreen and buttons are constants that will not change so I used const //
//document.getelementbyID searches for playe1-points in the html and fills in let definitions from above//
//so the script checks the document for instructions on how to display the points and uses the let values to fill it//
const player1PointsDisplay = document.getElementById('player1-points');
const player2PointsDisplay = document.getElementById('player2-points');
const player1Button = document.getElementById('player1-button');
const player2Button = document.getElementById('player2-button');

// The event listener waits for player1button to be triggered by the player1Button //
// generaterandompoints is then called to get a random number of points to lose //
//this function  ends up generating the points parameter below //
function generateRandomPoints() {
    return Math.floor(Math.random() * 100) + 1;
}


// this function uses the if statment //
function updatePoints(playerId, points) {
    // if playerID is equal to 1 //
  if (playerId === 1) {
    // The operator subtracts points from player1points leaving the remaning amount //
    player1Points -= points;
    // the remaining amount is updated in the html with the operator making player1point then equal player1pointdisplay.textcontent//
    player1PointsDisplay.textContent = player1Points;
    // and if its not doing That for player1 its doing this for player2 which is the same thing//
  } else {
    player2Points -= points;
    player2PointsDisplay.textContent = player2Points;
  }
}

// this function switches between players //
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

//this defines what the button does when clicked//
//this function listens for the button to be clicked which triggers the if statment //
player1Button.addEventListener('click', () => {
    //  if currentplayer is player 1//
  if (currentPlayer === 1) {
// generatedrandompoints() is defined as lost points by const //
    const lostPoints = generateRandomPoints();
//update points using the parameters for player, and lostpoints)//
//the value 1 and lostpoints is passed as an argument to the functions playerID and points parameter //
    updatePoints(1, lostPoints);
//complete first player move on to second//
    switchPlayer();
  }
});

//so basically when the eventlistener picks up that the player one button is clicked //
//then it waits for player2button to be activated//
player2Button.addEventListener('click', () => {
  if (currentPlayer === 2) {
    const lostPoints = generateRandomPoints();
    updatePoints(2, lostPoints);
    switchPlayer();
  }
});
