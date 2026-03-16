'see http://docs.pushwoosh.com/docs/phonegap-build
'http://docs.pushwoosh.com/docs/fcm-configuration
'https://www.joshmorony.com/setting-up-the-pushwoosh-plugin-with-phonegap-build/

Sub Main()
  if typeof(cordova)="undefined" Then
    MsgBox "This sample will only run if compiled using PhoneGap Build and run as a native app."
    Exit Sub
  End if
  document.addEventListener("deviceready", initPushwoosh, True)
  document.addEventListener("push-notification", notificationReceived)
End Sub

Sub notificationReceived(event)
  console.log("notification received:", event.notification.message)
  Dim message
  message=event.notification.message
  MsgBox "message:" & message
End Sub

Sub initPushwoosh()
  console.log("initPushwoosh")
  Dim pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification")
  Dim init = {appid: "5ED97-CF044", projectid: "938103699235"}
  pushwoosh.onDeviceReady(init);
  pushwoosh.registerDevice(initSuccess, initFail)
End Sub

Sub initSuccess(status)
  console.log("initSuccess", status)
  msg("push token: " & status);
End Sub

Sub initFail(status)
  console.log("initFail", status)
  msg(JSON.stringify("failed to register " & status))
End Sub

Sub msg(s)
  txtLog.text=s & vbCRLF & txtLog.text
End Sub