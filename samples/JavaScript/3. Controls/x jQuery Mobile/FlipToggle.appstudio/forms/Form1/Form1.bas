
Function FlipToggle1_onchange()
  Button1.value = FlipToggle1.value()
End Function

Function Button1_onclick()
  MsgBox FlipToggle1.value()
End Function

Function Button2_onclick()
  'set to text value of the option you want.
  If FlipToggle1.value() = "On" Then
    FlipToggle1.setValue("")
  Else
    FlipToggle1.setValue("On")
  End If
End Function
