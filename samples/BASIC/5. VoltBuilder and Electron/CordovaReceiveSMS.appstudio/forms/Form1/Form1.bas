// Uses cordova-plugin-sms-receive
// https://github.com/andreszs/cordova-plugin-sms-receive

Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub

Function Button1_onclick()
  SMSReceive.startWatch(startSuccess, startFail)
End Function

Function Button2_onclick()
  SMSReceive.stopWatch(stopSuccess, stopFail)
End Function

Function startSuccess()
  Textarea1.value = "watching started."
End Function

Function startFail()
  Textarea1.value = "watching start failed.."
End Function

Function stopSuccess()
  Textarea1.value = "watching stopped."
End Function

Function stopFail()
  Textarea1.value = "watching stop failed."
End Function

document.addEventListener("onSMSArrive", onSMSArrive)

Function onSMSArrive(e)
  IncomingSMS = e.data;
  
  Textarea1.value = "SMS Received" & vbCRLF
  Textarea1.value += "sms.address:" & IncomingSMS.address & vbCRLF
  Textarea1.value += "sms.body:" & IncomingSMS.body & vbCRLF
  Textarea1.value += JSON.stringify(IncomingSMS)
End Function
