Function NavBar1_onclick(choice)
  If TypeName(choice)="object" Then Exit Function
  MsgBox "Button pressed: " & choice
End Function


Function Button1_onclick()
  NavBar1_0.className = NavBar1_0.className + " ui-btn-active"
End Function

Function Button2_onclick()
  NavBar1_0.className = Replace(NavBar1_0.className, " ui-btn-active", "")
End Function


'A couple of useful things to know:
Function docsOnly()
  'to change the value of a button at runtime
  $("#NavBar1_0 .ui-btn-text").text("Kenny")

  'to see the value of a button at runtime
  MsgBox $("#NavBar1_0 .ui-btn-text").text()
End Function