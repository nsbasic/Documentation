 //This is AppStudio's simple benchmark.
 //Compare results at http://www.appstudio.dev/speedtest.htm

Button1.onclick = function() {
  NSB.WaitCursor(true); //Change the appearance of the cursor to show we're busy
 var limit,counter;

 //Calculate what time we will run to.
 //We take the current system time (in milliseconds) and add 4 seconds.
 //SysInfo(10) returns the system time in milliseconds.
  limit = SysInfo(10)+4*1000;
  counter = 0;
  do{ if(SysInfo(10) > limit) break;
    counter = counter + 1;
   } while(0<1);

  NSB.WaitCursor(false);
 //Divide by 4 since we ran for 4 seconds
  NSB.MsgBox(counter/4, 0, "Loops per second");

};