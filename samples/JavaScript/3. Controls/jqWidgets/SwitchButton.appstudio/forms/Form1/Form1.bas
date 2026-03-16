If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Function SwitchButton1_onchange()
  MsgBox "Changed to " & $("#SwitchButton1").jqxSwitchButton("checked")
End Function
