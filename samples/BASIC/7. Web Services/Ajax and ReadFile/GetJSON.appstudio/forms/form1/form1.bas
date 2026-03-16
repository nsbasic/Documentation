'GetJSON - gets some data from a site and processes it
'The data is a .json structure

Function Button1_onclick()
  GetJSON("datafile.json", done)
End Function

Function done(data)
  Textarea1.value = data.name & vbCRLF & data.city & vbCRLF & data.age
End Function
