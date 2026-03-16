 //This sample shows how to use the NSB.showProgress function

 //Set a global counter and call updateMessage every quarter second
var count=0;
var IntervalRefID = 0;

Form1.onshow = function() {
  count=0;
  IntervalRefID = setInterval(updateMessage,250);
};

function updateMessage() {
  count=count+1;
  if(count<20) {
 //Display the progress message followed by dots
    NSB.ShowProgress("Updating..."  +  _vbsString(count,"."));
    lblStat.textContent="Started";
 } else {
 //Clear the progress message and stop calling updateMessage
    interruptMesg();
  }
}

function interruptMesg() {
  NSB.ShowProgress(false);
  clearInterval(IntervalRefID);
  lblStat.textContent="Stopped";
}

btnStart.onclick = function() {
  count=0;
  IntervalRefID = setInterval(updateMessage,250);
};

btnInterrupt.onclick = function() {
  btnStart.onclick();
  setTimeout("interruptMesg()" , 2000);
};


