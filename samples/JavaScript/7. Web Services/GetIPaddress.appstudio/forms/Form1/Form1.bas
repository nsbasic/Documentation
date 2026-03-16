GetJSON("http://api.ipify.org?format=jsonp&callback=?","",getip)

Function getip(JSON)
  MsgBox "My IP address is " & JSON.ip
End Function