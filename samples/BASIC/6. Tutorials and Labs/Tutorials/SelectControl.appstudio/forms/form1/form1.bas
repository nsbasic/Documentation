Sub Main()
Dim i
For i=0 To 6
   selWeekDay.addItem(WeekdayName(i+1),WeekdayName(i+1))
Next
End Sub
  
Function selWeekDay_onchange()
  txtDay.value=selWeekDay.selectedValue()
End Function