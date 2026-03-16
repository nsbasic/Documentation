' This sample uses the CodeHS library which is available from www.codehs.com.
' It features a good collection of graphics tools for making games.
' There is more information on their website.
' Documentation is here:
' https://d14to6y4nub5k1.cloudfront.net/gulp/073fd54f7dca38f2398bd140709222ec6ebc2835/jsdoc/chs-js-lib/index.html
' Downnload is here:
' https://www.npmjs.com/package/codehs-js
' License is ISC

Dim APP_WIDTH = 400
Dim APP_HEIGHT = 480
Dim PADDLE_WIDTH = 80
Dim PADDLE_HEIGHT = 15
Dim PADDLE_OFFSET = 10

Dim BALL_RADIUS = 15

Dim NUM_ROWS = 8
Dim BRICK_TOP_OFFSET = 10
Dim BRICK_SPACING = 2
Dim NUM_BRICKS_PER_ROW = 10
Dim BRICK_HEIGHT = 10
Dim BRICK_WIDTH = (APP_WIDTH - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING) / NUM_BRICKS_PER_ROW

Dim paddle, ball
Dim vx 
Dim vy = 8
Dim gameOver = False
Dim NUM_TURNS = 3
Dim turnsLeft = NUM_TURNS
Dim bricksLeft = NUM_ROWS * NUM_BRICKS_PER_ROW


Function setupBall()
  ball = new Circle(BALL_RADIUS)
  ball.setPosition(getWidth()/2, getHeight()/2)
  add(ball)
End Function

Function setupPaddle()
  paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT)
  paddle.setPosition(getWidth()/2 - paddle.getWidth()/2, getHeight() - paddle.getHeight() - PADDLE_OFFSET)
  add(paddle)
End Function

Function getColorForRow(rowNum)
  rowNum = rowNum Mod 8
  Select Case rowNum
    Case 0, 1
      return Color.red
    Case 2, 3
      return Color.green
    Case 4, 5
      return Color.orange
    Case 6, 7
      return Color.blue
    Case Else
      return Color.blue
  End Select
End Function

Function drawBrick(x, y, colour)
  Dim brick
  brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT)
  brick.setPosition(x, y)
  brick.setColor(colour)
  add(brick)
End Function

Function drawRow(rowNum, yPos)
  Dim xPos = BRICK_SPACING
  Dim i
  For i = 0 To  NUM_BRICKS_PER_ROW - 1
    drawBrick(xPos, yPos, getColorForRow(rowNum))
    xPos += BRICK_WIDTH + BRICK_SPACING
  Next
End Function

Function drawBricks()
  Dim yPos = BRICK_TOP_OFFSET
  For i = 0 To NUM_ROWS - 1
    drawRow(i, yPos)
    yPos += BRICK_HEIGHT + BRICK_SPACING
  Next
End Function

Function setSpeeds()
  vx = Randomizer.nextInt(2, 7)
  If Randomizer.nextBoolean() Then vx = -vx
End Function

Function setup()
  drawBricks()
  setupPaddle()
  setupBall()
  setSpeeds()
End Function


Function checkWalls()
  If ball.getX() - ball.getRadius() < 0 Or ball.getX() + ball.getRadius() > getWidth() Then
    vx = -vx
  End If
  If ball.getY() - ball.getRadius() < 0 Then
    vy = -vy
  End If

  If ball.getY() + ball.getRadius() > getHeight() Then
    gameOver = True
  End If
End Function

Function getCollidingObject()
  Dim Left, Right, top, bottom
  
  Left = ball.getX() - ball.getRadius()
  Right = ball.getX() + ball.getRadius()
  
  top = ball.getY() - ball.getRadius()
  bottom = ball.getY() + ball.getRadius()

  Dim topLeft = getElementAt(Left, top)
  If topLeft Then return topLeft
  
  Dim topRight = getElementAt(Right, top)
  If topRight Then return topRight
  
  Dim bottomLeft = getElementAt(Left, bottom)
  If bottomLeft Then return bottomLeft
  
  Dim bottomRight = getElementAt(Right, bottom)
  If bottomRight Then return bottomRight
End If

Function checkObjects()
  Dim elem = getCollidingObject()
  console.log(elem)
  If elem <> null Then
    If elem <> paddle Then
      remove(elem)
      vy = -vy
      bricksLeft = bricksLeft - 1
    Else
      vy = -Math.abs(vy)
    End If
  End If
End Function

Function drawGameOver()
  Dim Msg = new Text("Game over", "25pt Arial")
  Msg.setPosition(getWidth()/2 - Msg.getWidth()/2, getHeight()/2)
  add(Msg)
End Function

Function drawGameWon()
  Dim Msg = new Text("You Win!", "25pt Arial")
  Msg.setPosition(getWidth()/2 - Msg.getWidth()/2, getHeight()/2)
  add(Msg)
End Function

Function checkWin()
  If bricksLeft = 0 Then
    stopTimer(draw)
    drawGameWon()
  End If
End Function

Function checkLose()
  ' This is unfortunately confusing now to play multiple times...
  If gameOver Then
    turnsLeft = turnsLeft - 1
    remove(ball)
    If turnsLeft = 0 Then
      stopTimer(draw)        
      drawGameOver()
    Else
      stopTimer(draw)
      waitForClick()
      setTimer(draw, 40)
      setupBall()
      setSpeeds()
      gameOver = False
    End If
  End If 
End Function

Function draw()
  checkWalls()
  checkObjects()
  ball.move(vx, vy)
  checkWin()
  checkLose()
End Function

Function myMove(event)
  Dim x 
  x = event.getX() - paddle.getWidth()/2
  If x < 0 Then x = 0
  If x + paddle.getWidth() > getWidth() Then
    x = getWidth() - paddle.getWidth()
  End If
  paddle.setPosition(x, paddle.getY())
End Function

Function go()
  console.log("hi")
End Function

Function start()
  setup()
  waitForClick()
  setTimer(draw, 40)
  mouseMoveMethod(myMove)
End Function

Sub Main()
  start()
End Sub