'This sample shows how to move an image around the screen,
'how to use the SetTimeout function.
'and how To use a webkitTransform.

'Movements are done a number of times per second, but the program is 
'still idle most of the time. There is still lots of processing time
'for other activities or even more sprites.

Function moveSprite1()
  'Function to move the image. Each time it is called,
  'the x, y and rotation are changed a bit. 
  currentX = currentX + deltaX
  currentY = currentY - deltaY;
  'move the sprite to the new location
  Sprite1.style.left=currentX + "px";
  Sprite1.style.top=currentY + "px";
  'this increases the rate of spin geometricly. 
  rotate=rotate*deltaRotate
  Sprite1.style.transform="rotate(" & rotate & "deg)"
  
  'Stop calling moveSprite1 when we are at the top.
  If currentY>0 Then 
    t=SetTimeout("moveSprite1()",pause)
  Else
    ClearTimeout(t)
  End If
Next

Function Button1_onclick()
  'Initialize Globals
  '  currentX and currentY have the current position. Init to bottom left.
  currentX = 0
  currentY = window.innerHeight-96
  pause=10 'milliseconds between updates to position
  rotate=1 'initial rotation in degrees.
  Sprite1.style.left=currentX + "px";
  Sprite1.style.top=currentY + "px";
  steps=window.innerHeight  'height of screen is number of movements 
  deltaX=(1/steps)*window.innerWidth
  deltaY=1
  deltaRotate=1+(1/steps)*10
  
  'Set to call moveSprite1 10 times per second
  SetTimeout("moveSprite1()",pause)  
End Function