'Server Data Send / Receive code
'Robert Borsuk
'rborsuk@colourfull.com
'2/16/14 updated by George Henne
'On the server side, you need to be running the minidataserver,
'written in Visual Studio 2010/C#.
'minidataserver can be downloaded from 
'http://wiki.appstudio.dev/images/e/e9/Minidataserver.zip

Dim serverAddress
Dim serverPort

'set for where your data server is
serverAddress="http://localhost"
'set for where your data server port is
serverPort="85"

Function ReceiveData(data)
  receiveText.value=decodeURIComponent(data)
End Function

Function SendData(dataToSend)  
  url = serverAddress&":"&serverPort&"?jsoncallback=?"
  req = GetJSON(url, {theData: encodeURIComponent(dataToSend)})
End Function

Function dataButton_onclick()
  Dim myData
  myData=sendText.value
  SendData(myData)
End Function
