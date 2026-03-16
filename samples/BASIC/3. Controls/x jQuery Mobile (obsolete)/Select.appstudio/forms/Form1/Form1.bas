'The Select control puts up a picker formatted for mobile devices.
'It looks different on a desktop browser than it does on the device.

Function Select1_onchange()
  MsgBox "Selected: " & Select1.selectedItem()
End Function

Function btnAddItem_onclick()
 Select1.addItem("NoneDay") 
End Function

Function btnClear_onclick()
  Select1.clear()
End Function

Function btnSetIndex_onclick()
  Select1.setIndex(2)
End Function

Function btnIndex_onclick()
  MsgBox "Index: " & Select1.selectedIndex()
End Function

Function btnItem_onclick()
  MsgBox " Item: " & Select1.selectedItem()
End Function

Function btnValue_onclick()
  MsgBox " Value: " & Select1.selectedValue()
End Function
