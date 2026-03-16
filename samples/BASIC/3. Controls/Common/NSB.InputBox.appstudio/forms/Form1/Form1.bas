Rem Demonstrate NSB.InputBox
Function Button1_onclick() 'InputBox
  NSB.InputBox(InputDone,"What am I thinking?", "InputBox Example", "Elephants")
End Function
 
Sub InputDone(result, value)
  If result=vbOK Then 
    TextBox1.value=value 
  Else 
    TextBox1.value="Cancel"
  End If
End Sub
