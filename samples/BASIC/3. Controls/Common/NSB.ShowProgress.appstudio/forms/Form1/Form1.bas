'This sample shows how to use the NSB.showProgress function

'Set a global counter and call updateMessage every quarter second
Dim count=0
Dim IntervalRefID = 0

Function Form1_onshow()
  count=0
  IntervalRefID = SetInterval(updateMessage,250)
End Function

Sub updateMessage()
  count=count+1
  If count<20 Then
    'Display the progress message followed by dots
    NSB.ShowProgress("Updating..." & String(count,"."))
    lblStat.textContent="Started"
  Else
    'Clear the progress message and stop calling updateMessage
    interruptMesg()
  End If
End Sub

Sub interruptMesg()
  NSB.ShowProgress(False)
  ClearInterval(IntervalRefID)
  lblStat.textContent="Stopped"
End Sub

Function btnStart_onclick()
  count=0
  IntervalRefID = SetInterval(updateMessage,250)
End Function

Function btnInterrupt_onclick()
  btnStart_onclick()
  SetTimeout("interruptMesg()", 2000)
End Function


