 // This sample uses the CodeHS library which is available from www.codehs.com.
 // It features a good collection of graphics tools for making games.
 // There is more information on their website.
 // Documentation is here:
 // https://d14to6y4nub5k1.cloudfront.net/gulp/073fd54f7dca38f2398bd140709222ec6ebc2835/jsdoc/chs-js-lib/index.html
 // Downnload is here:
 // https://www.npmjs.com/package/codehs-js
 // License is ISC

var APP_WIDTH = 400;
var APP_HEIGHT = 480;
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;

var BALL_RADIUS = 15;

var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var BRICK_WIDTH = (APP_WIDTH - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING) / NUM_BRICKS_PER_ROW;

var paddle,ball;
var vx;
var vy = 8;
var gameOver = false;
var NUM_TURNS = 3;
var turnsLeft = NUM_TURNS;
var bricksLeft = NUM_ROWS * NUM_BRICKS_PER_ROW;


function setupBall() {
  ball = new Circle(BALL_RADIUS);
  ball.setPosition(getWidth()/2, getHeight()/2);
  add(ball);
}

function setupPaddle() {
  paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
  paddle.setPosition(getWidth()/2 - paddle.getWidth()/2, getHeight() - paddle.getHeight() - PADDLE_OFFSET);
  add(paddle);
}

function getColorForRow(rowNum) {
  rowNum = rowNum % 8;
  switch (true) {
    case ((rowNum) == 0): case ((rowNum) ==  1):
      return Color.red;
	break;
    case ((rowNum) == 2): case ((rowNum) ==  3):
      return Color.green;
	break;
    case ((rowNum) == 4): case ((rowNum) ==  5):
      return Color.orange;
	break;
    case ((rowNum) == 6): case ((rowNum) ==  7):
      return Color.blue;
	break;
    default:
      return Color.blue;
  }
}

function drawBrick(x, y, colour) {
 var brick;
  brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
  brick.setPosition(x, y);
  brick.setColor(colour);
  add(brick);
}

function drawRow(rowNum, yPos) {
 var xPos = BRICK_SPACING;
 var i;
  for     (i = (0); i  <= NUM_BRICKS_PER_ROW - 1; i ++) {
    drawBrick(xPos, yPos, getColorForRow(rowNum));
    xPos += BRICK_WIDTH + BRICK_SPACING;
  }
}

function drawBricks() {
 var yPos = BRICK_TOP_OFFSET;
  for     (i = (0); i  <= NUM_ROWS - 1; i ++) {
    drawRow(i, yPos);
    yPos += BRICK_HEIGHT + BRICK_SPACING;
  }
}

function setSpeeds() {
  vx = Randomizer.nextInt(2, 7);
  if(Randomizer.nextBoolean() ) { vx = -vx; }
}

function setup() {
  drawBricks();
  setupPaddle();
  setupBall();
  setSpeeds();
}


function checkWalls() {
  if(ball.getX() - ball.getRadius() < 0 || ball.getX() + ball.getRadius() > getWidth()) {
    vx = -vx;
  }
  if(ball.getY() - ball.getRadius() < 0) {
    vy = -vy;
  }

  if(ball.getY() + ball.getRadius() > getHeight()) {
    gameOver = true;
  }
}

function getCollidingObject() {
 var Left,Right,top,bottom;

  Left = ball.getX() - ball.getRadius();
  Right = ball.getX() + ball.getRadius();

  top = ball.getY() - ball.getRadius();
  bottom = ball.getY() + ball.getRadius();

 var topLeft = getElementAt(Left,top);
  if(topLeft ) { return topLeft; }

 var topRight = getElementAt(Right,top);
  if(topRight ) { return topRight; }

 var bottomLeft = getElementAt(Left,bottom);
  if(bottomLeft ) { return bottomLeft; }

 var bottomRight = getElementAt(Right,bottom);
  if(bottomRight ) { return bottomRight; }
}

function checkObjects() {
 var elem; elem = getCollidingObject();
  console.log(elem);
  if(elem != null) {
    if(elem != paddle) {
      remove(elem);
      vy = -vy;
      bricksLeft = bricksLeft - 1;
 } else {
      vy = -Math.abs(vy);
    }
  }
}

function drawGameOver() {
 var Msg = new Text("Game over","25pt Arial");
  Msg.setPosition(getWidth()/2 - Msg.getWidth()/2, getHeight()/2);
  add(Msg);
}

function drawGameWon() {
 var Msg = new Text("You Win!","25pt Arial");
  Msg.setPosition(getWidth()/2 - Msg.getWidth()/2, getHeight()/2);
  add(Msg);
}

function checkWin() {
  if(bricksLeft == 0) {
    stopTimer(draw);
    drawGameWon();
  }
}

function checkLose() {
 // This is unfortunately confusing now to play multiple times...
  if(gameOver) {
    turnsLeft = turnsLeft - 1;
    remove(ball);
    if(turnsLeft == 0) {
      stopTimer(draw);
      drawGameOver();
 } else {
      stopTimer(draw);
      waitForClick();
      setTimer(draw, 40);
      setupBall();
      setSpeeds();
      gameOver = false;
    }
  }
}

function draw() {
  checkWalls();
  checkObjects();
  ball.move(vx, vy);
  checkWin();
  checkLose();
}

function myMove(event) {
 var x;
  x = event.getX() - paddle.getWidth()/2;
  if(x < 0 ) { x = 0; }
  if(x + paddle.getWidth() > getWidth()) {
    x = getWidth() - paddle.getWidth();
  }
  paddle.setPosition(x, paddle.getY());
}

function go() {
  console.log("hi");
}

function start() {
  setup();
  waitForClick();
  setTimer(draw, 40);
  mouseMoveMethod(myMove);
}

function Main() {
  start();
}