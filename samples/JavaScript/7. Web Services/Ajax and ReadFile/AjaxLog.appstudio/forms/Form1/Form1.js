 //This app sees how long it takes to update the server.
 //It does it as many times as it can in 4 seconds,
 //then divides the result by 4.

 //Don't forget to give write permission to the AjaxLog folder
 //on the server!

 //Here is the script on the server:
 //<?php
 //  // read and append to file
 //  $myFile = "AjaxLog/log.txt";
 //  $f = fopen($myFile, 'a') or die("can't open file");
 //  fwrite($f, $_GET['myText'] . Chr(13) . Chr(10));
 //  fclose($f);
 //?>
var limit,counter;

btnLog.onclick = function() {
 //Calculate what time we will run to.
 //We take the current system time (in milliseconds) and add 4 seconds.
  limit = SysInfo(10)+4*1000;
  counter = 0;
  writeToServer();
};

function writeToServer() {
    if(SysInfo(10) < limit) {
      counter=counter + 1;
      req = Ajax("ajaxLog.php/?myText="  +  counter, done);
 } else {
      NSB.MsgBox(counter/4, 0, "iterations per second");
    }
}

function done(a, status, c) {
  if(status == "error" && limit != 0) {
    NSB.MsgBox("Error: "   +  c);
 } else {
    writeToServer();
  }
}

