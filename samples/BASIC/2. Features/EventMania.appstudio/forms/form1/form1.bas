'This app explores some of the events that happen when someone touches the screen.
'It's best to test this on an actual device.

'Sometimes the same event appears multiple times. This is a global we can 
'check so that we only report events that are different from the previous one.
lastEvent=""

'This function logs the events to the screen as they appear.
Function logit(s)
  If s<>lastEvent Then
    txtResults.value=s & vbCRLF & txtResults.value
    lastEvent=s
  End If
End Function

'Touch Events
Function Button1_ontouchstart()
  logit(event.target.id & "_" & event.type & " x:" & event.touches[0].pageX & " y:" & event.touches[0].pageY)
End Function
Function Button1_ontouchend()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_ontouchmove()
  logit(event.target.id & "_" & event.type & " x:" & event.touches[0].pageX & " y:" & event.touches[0].pageY)
End Function

'Click and KeyDown Events for Button1
Function Button1_onchange()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onclick()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_ondblclick()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onfocus()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onkeydown()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onkeypress()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onkeyup()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onmousedown()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onmousemove()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onmouseup()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onmouseover()
  logit(event.target.id & "_" & event.type)
End Function
Function Button1_onmouseup()
  logit(event.target.id & "_" & event.type)
End Function


'Click and KeyDown Events for txtResults
Function txtResults_onchange()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onclick()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_ondblclick()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onfocus()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onkeydown()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onkeypress()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onkeyup()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onmousedown()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onmousemove()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onmouseup()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onmouseover()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onmouseup()
  logit(event.target.id & "_" & event.type)
End Function
Function txtResults_onselect()
  logit(event.target.id & "_" & event.type)
End Function 
