'Websocket sample. Websockets let you talk to a server using the
'Websocket protocol. 
'It's a more secure version of WinSock, but not the same thing.
'For more info, see
'http://websockets.org/echo.html
'To download server code for VB Express 2012, go to
'http://wiki.appstudio.dev/images/c/cf/WebSocketsEchoServer.VBExpress2012.zip
'Also works on Visual Studio Express 2013


Dim ws

Sub Main
  secureCB.onclick()
  secureCB.childNodes[1].children[1].disabled = True
End Sub

Function onOpen(evt)
  logToConsole("CONNECTED")
  setGuiConnected(True)
End Function

Function onClose(evt)
  logToConsole("DISCONNECTED")
  setGuiConnected(False)
End Function

Function onMessage(evt)
  logToConsole("RESPONSE: " + evt.data)
End Function

Function onError(evt)
  logToConsole("ERROR:" + evt.data)
End Function

Function secureCB_onclick()
  If secureCB.getValue(1) = True Then
    wsUri.value = "wss://echo.websocket.org"
  Else
    wsUri.value = "ws://echo.websocket.org"
  End If
End Function

Function connect_onclick()
  console.log("clic")
  If Not WebSocket Then
    logToConsole("Error: This browser does not support WebSockets.")
    Exit Function
  Else
    logToConsole("This browser supports WebSockets.")
  End If
  
  ws = new WebSocket(wsUri.value)
  'hook the websocket's events into the functions in this program
  ws.onopen = onOpen
  ws.onclose = onClose
  ws.onmessage = onMessage
  ws.onerror = onError
End Function

Sub logToConsole(message)
  consoleLog.value = consoleLog.value & message & Chr(10)
End Sub

Function disconnect_onclick()
  ws.close()
End Function

Function clearLogBut_onclick()
  consoleLog.value = ""
End Function

Function send_onclick()
  logToConsole("SENT: " & sendMessage.value)
  ws.send(sendMessage.value)
End Function

Sub setGuiConnected(isConnected)
  wsUri.disabled = isConnected
  connect.disabled = isConnected
  disconnect.disabled = Not isConnected
  sendMessage.disabled = Not isConnected
  send.disabled = Not isConnected
  labelColor = "black";
  If isConnected Then
    labelColor = "#999999"
  End If
  secureCB.childNodes[1].children[0].style.color = labelColor;
  secureCB.childNodes[1].children[1].disabled = isConnected;
End Sub
