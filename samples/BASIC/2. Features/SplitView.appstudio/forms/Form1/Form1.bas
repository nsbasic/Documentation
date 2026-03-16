Sub Main
  Form2.show()
End Sub

Function List1_onclick(choice)
  If TypeName(choice)<>"object" Then 
    Textarea1.value="Choice is " & choice
  End If
End Function
