if(navigator.vibrate==undefined) {
  NSB.MsgBox("Device does not support vibration.");
}

Button1.onclick = function() {
  navigator.vibrate(1000);
};

Button2.onclick = function() {
  navigator.vibrate([500,100,500,100,500]);
};
