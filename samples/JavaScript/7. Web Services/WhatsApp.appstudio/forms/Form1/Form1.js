
Button1.onclick = function() {
  location = "whatsapp://app";
};

Button2.onclick = function() {
 var s;

  if(txtMessage.text=="") {
    NSB.MsgBox("No message.");
    return;
  }

  s = "whatsapp://send?text="  +  encodeURIComponent(txtMessage.text);
  if(txtSendTo.text!="" ) { s = s  +  "?abid="  +  encodeURIComponent(txtSendTo.text); }
  location = s;
};
