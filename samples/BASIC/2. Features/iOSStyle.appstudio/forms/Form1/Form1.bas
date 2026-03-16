'https://devforums.apple.com/thread/193183
'http://mobilexweb.com/ts/api/page.html

Function Button1_onclick()
  ProgressBar1.value=ProgressBar1.value+10
End Function

Function window_onpageshow()
  msg("Page Show")
End Function

Function window_onpagehide()
  msg("Page Hide")
End Function

Function window_onvisibilitychange(v)
  msg( "Visibility changed to " & v)
End Function

Function Button2_onclick()
  msg("txtDate.value: " & txtDate.value)
  msg("txtDate.valueAsDate: " & txtDate.valueAsDate)
  msg("txtDate.valueAsNumber: " & txtDate.valueAsNumber)
  msg("txtTime.value: " & txtTime.value)
  msg("txtTime.valueAsDate: " & txtTime.valueAsDate)
  msg("txtTime.valueAsNumber: " & txtTime.valueAsNumber)
End Function

Function msg(s)
  txtLog.text=Time() & " " & s & vbCRLF & txtLog.text
End Function
