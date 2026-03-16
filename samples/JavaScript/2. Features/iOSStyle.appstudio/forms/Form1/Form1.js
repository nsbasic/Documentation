 //https://devforums.apple.com/thread/193183
 //http://mobilexweb.com/ts/api/page.html

Button1.onclick = function() {
  ProgressBar1.value=ProgressBar1.value+10;
};

window.onpageshow = function() {
  msg("Page Show");
};

window.onpagehide = function() {
  msg("Page Hide");
};

window.onvisibilitychange = function(v) {
  msg( "Visibility changed to "  +  v);
};

Button2.onclick = function() {
  msg("txtDate.value: "  +  txtDate.value);
  msg("txtDate.valueAsDate: "  +  txtDate.valueAsDate);
  msg("txtDate.valueAsNumber: "  +  txtDate.valueAsNumber);
  msg("txtTime.value: "  +  txtTime.value);
  msg("txtTime.valueAsDate: "  +  txtTime.valueAsDate);
  msg("txtTime.valueAsNumber: "  +  txtTime.valueAsNumber);
};

function msg(s) {
  txtLog.text=Time()  +  " "  +  s  +  '\n'  +  txtLog.text;
}
