'This sample show how to use the Device Motion sensors.
'Inspired by http://www.mobilexweb.com/blog/safari-ios-accelerometer-websockets-html5

'AppStudio can get information from the built in accelerometer,
'which reports the device's motion.
'Whenever the device moves, it sends a call to window_ondevicemotion(event),
'with an event block that contains information about the movement.
'This sample just uses the x and y coordinates of accelerationIncludingGravity.
'You could improve this sample by using the acceleration and rotationRate.
'Apple has good docs at
'http://developer.apple.com/library/safari/#documentation/SafariDOMAdditions/Reference/DeviceMotionEventClassRef/DeviceMotionEvent/DeviceMotionEvent.html

If window.DeviceMotionEvent=undefined Then
  MsgBox "Your browser does not support Device Orientation and Motion API. Try this sample with iOS 4.2+ or Android 3.0+. "
End If 

'Initialization:
' Position Variables
x = 0
y = 0
' Speed - Velocity
vx = 0
vy = 0
' Acceleration
ax = 0
ay = 0
' Other
delay = 10
vMultiplier = 0.01

'This function calls the moveBall function 100 times per second.
SetInterval(moveBall, delay)

'This sub gets called whenever a significant motion event is detected by the device.
'The result is in meters per second squared.
'Use acceleration to get the user motion only.
Sub window_ondevicemotion(event)
  'On Google Glass, motions are reversed, so we multiply by -1
  'Tilting head forward and back is z access, which we map to the y access on the screen.
  ax = -event.accelerationIncludingGravity.x;
  ay = -event.accelerationIncludingGravity.z;
End Sub    

'This sub is called 100 times per second. Based on the current accelerator data,
'it calculates the new position for the ball and sets it.
Sub moveBall()
  vy = vy + -(ay)
  vx = vx + ax

  y = parseInt(y + vy * vMultiplier)
  x = parseInt(x + vx * vMultiplier)

  'Do bounds checking
  If x<0 Then
    x = 0
    vx = 0
  End If
  If y<0 Then
    y = 0
    vy = 0
  End If
  If x>document.documentElement.clientWidth-20 Then
    x = document.documentElement.clientWidth-20
    vx = 0
  End If
  If y>document.documentElement.clientHeight-20 Then
    y = document.documentElement.clientHeight-20
    vy = 0
  End If

  ball.style.top = y + "px"
  ball.style.left = x + "px"
End Sub  