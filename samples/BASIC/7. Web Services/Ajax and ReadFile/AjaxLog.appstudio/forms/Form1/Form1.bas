'This app sees how long it takes to update the server.
'It does it as many times as it can in 4 seconds,
'then divides the result by 4.

'Don't forget to give write permission to the AjaxLog folder
'on the server!

'Here is the script on the server:
'<?php
'  // read and append to file
'  $myFile = "AjaxLog/log.txt";
'  $f = fopen($myFile, 'a') or die("can't open file");
'  fwrite($f, $_GET['myText'] . Chr(13) . Chr(10));
'  fclose($f);
'?>
Dim limit, counter

Function btnLog_onclick()
  'Calculate what time we will run to.
  'We take the current system time (in milliseconds) and add 4 seconds.
  limit = SysInfo(10)+4*1000
  counter = 0
  writeToServer()  
End Function

Function writeToServer()
    If SysInfo(10) < limit Then
      counter=counter + 1
      req = Ajax("ajaxLog.php/?myText=" & counter, done)
    Else
      MsgBox counter/4, 0, "iterations per second"
    End If   
End Function

Function done(a, status, c)
  If status = "error" And limit <> 0 Then 
    MsgBox "Error: "  & c
  Else
    writeToServer()
  End If
End Function

