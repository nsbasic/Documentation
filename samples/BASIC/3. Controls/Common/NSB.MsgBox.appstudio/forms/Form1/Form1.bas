TITLE = "MsgBox Tour"

Function Button1_onclick() 'Simple Message
  MsgBox "Hello World!",0," "
End Function

Function Button2_onclick() 'Simple Message with a custom title
  MsgBox "Brief Tour of MSGBOX!",0, TITLE
  'close the MsgBox if no answer in 5 seconds
  SetTimeout("NSB.closeMsgBox()",5000)
End Function

Function Button3_onclick() 'Yes/No Prompt
  MsgBox Button3done,"Do you like this tour?", vbYesNo+vbQuestion, TITLE
End Function

Sub Button3done(result)
  If result=vbYes Then Text1.value="Yes" Else Text1.value="No"
End Sub

Function Button4_onclick() 'Custom Buttons
  MsgBox Button4done,"How is NSB/AppStudio?", "Fun,Great,Sweet", TITLE
End Function

Sub Button4done(result)
  Text2.value=result
End Sub

Function Button5_onclick() 'Custom Button and Icon
  MsgBox "Who is the Happy Guy?", "Mario;includes/mario.jpg", TITLE
End Function

Function Button6_onclick() 'InputBox
  NSB.InputBox(Button6done,"What am I thinking?", "InputBox Example")
End Function

Sub Button6done(result, value)
  If result=vbOK Then Text3.value=value Else Text3.value="Cancel"
End Sub
