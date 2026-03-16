Button1.onclick = function() {
  NSB.WaitCursor(true);
  Button1.disabled=true;
  Button2.disabled=false;
};

Button2.onclick = function() {
  NSB.WaitCursor(false);
  Button1.disabled=false;
  Button2.disabled=true;
};
