
Function Tabs1_onclick(i)
  If TypeName(i) = "object" Then Exit Function
  MsgBox "Tab chosen: " + Tabs1.value
  If i = 0 Then Container1.hide()
  If i = 1 Then Container1.show()
End Function
