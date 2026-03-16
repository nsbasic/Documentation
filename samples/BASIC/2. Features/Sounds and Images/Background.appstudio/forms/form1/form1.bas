'Set the background image of the page at runtime. 
'Pattern repeats itself to fill screen
'Also, sets an event and responds To it.

'Set the onmousedown event of the body to call our bodyMouseDown function.
document.body.onclick=bodyClick

Function bodyClick()
  'event is a global object that contains information about the last event.
  If event.clientY>30 Then
    MsgBox event.type & " at " & event.clientX & "," & event.clientY
  Else
    form1.style.backgroundImage="url(https://www.appstudio.dev/images/lavalamp.gif)"
  End If
End Function
