If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Dim n=0

Function DragDrop1_onTargetDrop()
  n=n+1
  TextArea1.value=TextArea1.value & Label1.textContent & " " & n & vbCRLF  
End Function