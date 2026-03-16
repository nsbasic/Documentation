'This project shows how a EULA can be added to your app. 
'Put the EULA text into the project's EULA property and 
'add the EULA control to your app.

'this function shows you how to reset the EULA setting.
Function Button1_onclick()
  localStorage[NSB.id & "_EULA"] = False
  location.href = "index.html"
End Function
