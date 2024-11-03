let player1Points = 1000;
let player2Points = 1000;
let currentPlayer = 1; 

const player1PointsDisplay = document.getElementById('player1-points');
const player2PointsDisplay = document.getElementById('player2-points');
const player1Button = document.getElementById('player1-button');
const player2Button = document.getElementById('player2-button');


function generateRandomPoints() {
    return Math.floor(Math.random() * 100) + 1;
}

function updatePoints(playerId, points) {
     if (playerId === 1) {
      player1Points -= points;
      player1PointsDisplay.textContent = player1Points;
    } else {
    player2Points -= points;
    player2PointsDisplay.textContent = player2Points;
  }
}


function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

ment //
player1Button.addEventListener('click', () => {
   if (currentPlayer === 1) {
    const lostPoints = generateRandomPoints();
    updatePoints(1, lostPoints);
    switchPlayer();
  }
});

player2Button.addEventListener('click', () => {
  if (currentPlayer === 2) {
    const lostPoints = generateRandomPoints();
    updatePoints(2, lostPoints);
    switchPlayer();
  }
});
