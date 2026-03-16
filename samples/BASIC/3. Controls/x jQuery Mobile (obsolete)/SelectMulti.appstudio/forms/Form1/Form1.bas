
Function Button1_onclick()
  
Dim arr, n, s

s = "ubound(Select1.selectedItem()): " & UBound(Select1.selectedItem())
arr = Select1.selectedItem()
For n = 0 To UBound(arr)
  s = s & vbCRLF & "Select1.selectedItem()[" & n & "]: " & Select1.selectedItem()[n]
Next

 MsgBox Select1.selectedIndex() & vbCRLF _
      & Select1.selectedValue() & vbCRLF _
      & Select1.selectedItem() & vbCRLF & vbCRLF _
      & s
End Function