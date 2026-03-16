If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Sub Main()
  $("#Calendar1").jqxCalendar({ value: $.jqx._jqxDateTimeInput.getDateTime(new Date(2011, 9, 1)) });
End Sub

Function Calendar1_oncellSelected()
  MsgBox $("#Calendar1").jqxCalendar("getDate")
End Function
