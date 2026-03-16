Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub

Function btnSend_onclick()
  var socketID;
  sendTo(txtData.value, txtAddress.value, Number(txtPort.value))
  SetTimeout("sendTimeout(" & socketID & ")", 3000) ' 3 seconds
End Function

Function receiveErrorListener(info)
  msg("RecvError on socket: " & info.socketId);
  chrome.sockets.udp.close(info.socketId);
End Function

Function receiveListener(info) 
  msg("Recv from socket: " & arrayBufferToString(info.data));
  chrome.sockets.udp.close(info.socketId);
End Function

Function sendTimeout(socketID)
  chrome.sockets.udp.close(socketID);
End Function

Function msg(s)
  console.log(s)
  TextArea1.text = s & vbCRLF & TextArea1.text
End Function
