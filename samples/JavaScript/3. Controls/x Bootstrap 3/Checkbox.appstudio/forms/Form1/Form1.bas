
Function Checkbox1_onclick()
  Dim choices = "Choices: "
  For i = 0 To Checkbox1.length-1
    If Checkbox1.getValue(i) Then choices = choices & i & " "
  Next
  MsgBox choices
End Function