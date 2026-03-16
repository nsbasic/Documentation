
Function Dropdown1_onclick(s)
  If typeof(s)="object" Then return
  MsgBox s & " " & Dropdown1.selection & Dropdown1.value
End Function

