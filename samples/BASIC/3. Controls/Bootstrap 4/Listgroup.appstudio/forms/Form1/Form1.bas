
Function Listgroup1_onclick(choice)
  MsgBox "The choice is " & choice
End Function

Function Listgroup2_onclick(choice)
  MsgBox "The choice is " & choice
End Function

Function Button1_onclick()
  console.log("clear")
  Listgroup1.clear()
End Function

Function Button2_onclick()
  Listgroup1.addItem(Now())
End Function
