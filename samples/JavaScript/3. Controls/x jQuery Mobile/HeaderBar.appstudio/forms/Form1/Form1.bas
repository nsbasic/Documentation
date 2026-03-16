Function HeaderBar1_onclick(button)
  If TypeName(button)="object" Then Exit Function
  MsgBox "Button '" & button & "' clicked."
End Function