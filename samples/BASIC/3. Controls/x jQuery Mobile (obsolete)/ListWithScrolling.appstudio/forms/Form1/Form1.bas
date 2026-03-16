Function List1_onclick(i)
  If TypeName(i)="object" Then Exit Function
  MsgBox "Menu item chosen: " & i & " " & List1.getItem(i)
End Function
