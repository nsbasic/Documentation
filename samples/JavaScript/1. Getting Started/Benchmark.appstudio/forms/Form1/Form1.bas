'This is AppStudio's simple benchmark.
'Compare results at http://www.appstudio.dev/speedtest.htm

Function Button1_onclick()
  WaitCursor True 'Change the appearance of the cursor to show we're busy
  Dim limit, counter
  
  'Calculate what time we will run to.
  'We take the current system time (in milliseconds) and add 4 seconds.
  'SysInfo(10) returns the system time in milliseconds.
  limit = SysInfo(10)+4*1000
  counter = 0
  Do Until SysInfo(10) > limit
    counter = counter + 1
  Loop
  
  WaitCursor False
  'Divide by 4 since we ran for 4 seconds
  MsgBox counter/4, 0, "Loops per second"
  
End Function