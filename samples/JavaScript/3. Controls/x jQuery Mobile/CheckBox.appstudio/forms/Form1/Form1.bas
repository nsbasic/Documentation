Sub Main
  CheckBox1.setValue(2, True)
  CheckBox2.setValue(1, True)
End Sub

Function CheckBox1_onchange()
  MsgBox "One is " & CheckBox1.getValue(1) & vbCRLF & _
         "Two is " & CheckBox1.getValue(2)
End Function

Function CheckBox2_onchange()
  MsgBox "One is " & CheckBox2.getValue(1) & vbCRLF & _
         "Two is " & CheckBox2.getValue(2) & vbCRLF & _
         "Three is " & CheckBox2.getValue(3)
End Function

Function Button1_onclick()
  If CheckBox1.getValue(1)=True Then
    CheckBox1.setValue(1,False)
  Else
    CheckBox1.setValue(1,True)
  End If
End Function
