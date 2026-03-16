weather = require("weather-js")
 
Function Button1_onclick()
  weather.find({search: "San Francisco, CA", degreeType: "F"}, weatherFindCallback)
End Function

Function weatherFindCallback(err, result)
  If err Then
    MsgBox(err)
  Else
    Print JSON.stringify(result, null, 2)
  End If
End Function