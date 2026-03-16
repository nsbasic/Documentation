Sub Main
  RadioButton1.setValue(2, True)
  RadioButton2.setValue(1, True)
End Sub

Function RadioButton1_onchange()
  MsgBox "One is " & RadioButton1.getValue(1) & vbCRLF & _
         "Two is " & RadioButton1.getValue(2)
End Function

Function RadioButton2_onchange()
  MsgBox "One is " & RadioButton2.getValue(1) & vbCRLF & _
         "Two is " & RadioButton2.getValue(2) & vbCRLF & _
         "Three is " & RadioButton2.getValue(3)
End Function
