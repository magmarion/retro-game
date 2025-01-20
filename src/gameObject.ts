let gridWidth = 30;
let gridHeight = 30;

let gameStarted = false;
let startingSegments = 10;
let xStart = 0;
let yStart = 15;
let startDirection = 'right';
let direction = startDirection;
let segments = [];
let score = 0;
let highScore;
let fruit;

interface Player {
  name: string;
  position: p5.Vector;
}

let players: Player[] = [];

function setup() {
  createCanvas(500, 500);
  frameRate(10);
  textAlign(CENTER, CENTER);
  textSize(2);
  highScore = getItem('high score');
  describe(
    'A reproduction of the arcade game Snake, in which a snake, represented by a green line on a black background, is controlled by the arrow keys. Users move the snake toward a fruit, represented by a red dot, but the snake must not hit the sides of the window or itself.'
  );
}

function draw() {
  background(0);
  scale(width / gridWidth, height / gridHeight);
  if (gameStarted === false) {
    showStartScreen();
  } else {
    translate(0.5, 0.5);
    showFruit();
    showSegments();
    updateSegments();
    checkForCollision();
    checkForFruit();
    showPlayers();
  }
}

function showStartScreen() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 10, 2);
  fill(255);
  text(
    'Click to play.\nUse arrow keys to move.',
    gridWidth / 2,
    gridHeight / 2
  );
  noLoop();
}

function mousePressed() {
  if (gameStarted === false) {
    startGame();
  }
}

function startGame() {
  updateFruitCoordinates();
  segments = [];
  for (let x = xStart; x < xStart + startingSegments; x += 1) {
    let segmentPosition = createVector(x, yStart);
    segments.unshift(segmentPosition);
  }
  direction = startDirection;
  score = 0;
  gameStarted = true;
  loop();
}

function showFruit() {
  stroke(255, 64, 32);
  point(fruit.x, fruit.y);
}

function showSegments() {
  noFill();
  stroke(96, 255, 64);
  beginShape();
  for (let segment of segments) {
    vertex(segment.x, segment.y);
  }
  endShape();
}

function updateSegments() {
  segments.pop();
  let head = segments[0].copy();
  segments.unshift(head);
  switch (direction) {
    case 'right':
      head.x = head.x + 1;
      break;
    case 'up':
      head.y = head.y - 1;
      break;
    case 'left':
      head.x = head.x - 1;
      break;
    case 'down':
      head.y = head.y + 1;
      break;
  }
}

function checkForCollision() {
  let head = segments[0];
  if (
    head.x >= gridWidth ||
    head.x < 0 ||
    head.y >= gridHeight ||
    head.y < 0 ||
    selfColliding() === true
  ) {
    gameOver();
  }
}

function gameOver() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 12, 2);
  fill(255);
  highScore = max(score, highScore);
  storeItem('high score', highScore);
  text(
    `Game over!
Your score: ${score}
High score: ${highScore}
Click to play again.`,
    gridWidth / 2,
    gridHeight / 2
  );
  gameStarted = false;
  noLoop();
}

function selfColliding() {
  let head = segments[0];
  let segmentsAfterHead = segments.slice(1);
  for (let segment of segmentsAfterHead) {
    if (segment.equals(head) === true) {
      return true;
    }
  }
  return false;
}

function checkForFruit() {
  let head = segments[0];
  if (head.equals(fruit) === true) {
    score = score + 1;
    let tail = segments[segments.length - 1];
    let newSegment = tail.copy();
    segments.push(newSegment);
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() {
  let x = floor(random(gridWidth));
  let y = floor(random(gridHeight));
  fruit = createVector(x, y);
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case RIGHT_ARROW:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case UP_ARROW:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case DOWN_ARROW:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}

function showPlayers() {
  fill(255, 0, 0);
  noStroke();
  for (let player of players) {
    ellipse(player.position.x, player.position.y, 1, 1);
  }
}

// Add players to the game board
function addPlayer(name: string, x: number, y: number) {
  let playerPosition = createVector(x, y);
  let player: Player = { name, position: playerPosition };
  players.push(player);
}

// Example of adding players
addPlayer("Alice", 5, 5);
addPlayer("Bob", 10, 10);