' Form1 Code 
Dim name, birthday, dayofweek
Dim a,b,c

Sub Main()
  Select1.clear()
  For i=0 To 11
    Select1.addItem(i+1)
  Next
  Select2.clear()
  For i=0 To 30
    Select2.addItem(i+1)
  Next
  Select3.clear()
  For i=0 To 110
    Select3.addItem(i+1900)
  Next
End Sub

' Check to see if Select has recieved an input
' combo box for month 
Function Select1_onchange()
  a=Select1.selectedItem() 
  'MsgBox "selectedIndex is " & Select1.selectedIndex() & " with value " & a 
End Function

Function Select2_onchange()
  b=Select2.selectedItem()
 ' MsgBox "selectedIndex is " & b.selectedIndex & " with value " & b.value 
End Function

Function Select3_onchange()
  c=Select3.selectedItem()
  'MsgBox "selectedIndex is " & c.selectedIndex & " with value " & c.value 
End Function

Function Button1_onclick()
  birthday = a & "/ " & b & "/ " & c 
  'MsgBox "Birthday = " & birthday 
  Text2.value = Text1.value
  Text3.value = birthday
  dayofweek = Weekday(birthday) 
  'MsgBox "Day of Week = " & dayofweek 
  Text4.value = WeekdayName (dayofweek)
  ChangeForm(Form2)
End Function

Function TitleBar1_onclick(choice)
  If choice="Next" Then
    ChangeForm(Form2)
   End If     
End Function
