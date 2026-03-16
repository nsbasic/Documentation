Dim formats, i

formats=["DD.MM.YY", "DD.MM.YYYY", "DD/MM/YY", "DD/MM/YYYY", "DD-MM-YY", "DD-MM-YYYY", _
"DDMMYY", "DDMMYYYY", "YY.MM.DD", "YYYY.MM.DD", "YY/MM/DD", "YYYY/MM/DD", "YY-MM-DD", _
"YYYY-MM-DD", "YYMMDD", "YYYYMMDD", "MM.DD.YY", "MM.DD.YYYY", "MM/DD/YY", "MM/DD/YYYY", _
"MM-DD-YY", "MM-DD-YYYY", "MMDDYY", "MMDDYYYY"]

Sub Main()
  For i=0 To UBound(formats)-1
    TextArea1.value=TextArea1.value & formats[i] & " is " & FormatDateTime(Now, formats[i]) & vbCRLF
  Next
End Sub
