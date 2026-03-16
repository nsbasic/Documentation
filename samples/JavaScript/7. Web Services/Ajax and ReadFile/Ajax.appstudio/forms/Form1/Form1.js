var req;

btnSendData.onclick = function() {
  req=Ajax("ajax.php/?myText=" + txtSend.value, done);
};


function done() {
  if(req.status == 200) { //success
    txtResponse.value=req.responseText;
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    NSB.MsgBox(msg);
  }
}