'Contributed by Mike Burgher

Dim  swStartX, swStartY, swCurX, swCurY
Dim SwipeLength, swipeAngle, swipeDirection, legalSwipe = False
Dim swipeMinLength = 20

Function LblTop_ontouchstart()
  swStartX= event.touches[0].pageX
  swStartY= event.touches[0].pageY
End Function

Function LblTop_ontouchmove()
  swCurX = event.touches[0].pageX
  swCurY = event.touches[0].pageY
End Function

Function LblTop_ontouchend()
  If swCurX <> 0 Then
    SwipeLength = Math.round(Math.sqrt(Math.pow(swCurX - swStartX,2) + Math.pow(swCurY - swStartY,2)))
    If SwipeLength >= swipeMinLength Then
      calcAngle()
      determineSwipeDir()
      processSwipe()
    End If
  End If
  TouchCancel()
End Function

Function TouchCancel()
  swStartX = 0
  swStartY = 0
  swCurX = 0
  swCurY = 0
  SwipeLength = 0
  swipeAngle = null
  swipeDirection = null
  legalSwipe = False
End Function

' calculate the angle
Function calcAngle()
  Dim calX = swStartX-swCurX
  Dim calY = swCurY-swStartY
  Dim calZ
  Dim calR
  calZ = Math.round(Math.sqrt((calX*calX)+(calY*calY)))  ' the distance - rounded - in pixels
  calR = Math.atan2(calY,calX)                           ' angle in radians
  swipeAngle = Math.round(calR*180/Math.PI)              ' angle in degrees
  If swipeAngle < 0  Then
    swipeAngle = 360 - Abs(swipeAngle)
  End If
End Function

' determine swipe direction - left, right up down...
Function determineSwipeDir()
  If (swipeAngle <= 45) And (swipeAngle >= 0) Then
    swipeDirection = "left"
  Else If (swipeAngle <= 360) And (swipeAngle >= 315) Then
    swipeDirection = "left"
  Else If (swipeAngle >= 135) And (swipeAngle <= 225) Then
    swipeDirection = "right"
  Else If (swipeAngle > 45) And (swipeAngle < 135) Then
    swipeDirection = "down"
  Else
    swipeDirection = "up"
  End If
End Function

Function processSwipe()
  MsgBox swipeDirection
End Function