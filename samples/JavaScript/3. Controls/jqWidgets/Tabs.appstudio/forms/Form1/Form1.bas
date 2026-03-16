If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Function Tabs1_onselected(e)
  MsgBox "selected " & e.args.item
End Function

Function Tabs1_ontabclick(e)
  MsgBox "tabclick " & e.args.item
End Function
