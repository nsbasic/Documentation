If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Dim clicks=0

Function Button1_onclick()
  MsgBox "Clicked!"
End Function

Function Button2_onclick()
  clicks=clicks+1
  Button2.value="Repeat:" & clicks
End Function

Function Button3_onclick()
  location="http://www.appstudio.dev"
End Function

Function Button4_onclick()
  If $("#Button4").jqxToggleButton("toggled") Then
    Button4.value="Toggle On"
  Else
    Button4.value="Toggle Off"
  End If
End Function
