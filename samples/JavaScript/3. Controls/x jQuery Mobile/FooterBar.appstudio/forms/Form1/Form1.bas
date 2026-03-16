Sub Main()
  'FooterBar1.refresh()
End Sub

Function FooterBar1_onclick(choice)
  If TypeName(choice)="object" Then Exit Function
  MsgBox "Button is " & choice
End Function

Function Button1_onclick()
  FooterBar1_0.className = FooterBar1_0.className + " ui-btn-active"
End Function

Function Button2_onclick()
  FooterBar1_0.className = Replace(FooterBar1_0.className, " ui-btn-active", "")
End Function
