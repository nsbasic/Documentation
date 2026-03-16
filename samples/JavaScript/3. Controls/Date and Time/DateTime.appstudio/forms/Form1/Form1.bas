Sub Main()
  Date1.value = "2014-05-23"
  DateTime1.value = "2014-05-23T14:03"
  Month1.value = "2014-05"
  Time1.value = "14:03"
End Sub

Function Button1_onclick()
 NSB.MsgBox "Date: " & Date1.value & vbCRLF & _
  "DateTime: " & DateTime1.value & vbCRLF & _
  "Month: " & Month1.value & vbCRLF & _
  "Time: " & Time1.value
End Function
