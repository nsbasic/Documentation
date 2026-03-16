 //This sample must be run from the same server that ajaxGetURL.php is on.

btnGetFile.onclick = function() {
  req=Ajax("ajaxGetURL.php/?urlToGet="  +  txtURL.value, done);
};

function done() {
  if(req.status == 200) { //success
    htmResponse.innerHTML=req.responseText;
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    NSB.MsgBox(msg);
  }
}