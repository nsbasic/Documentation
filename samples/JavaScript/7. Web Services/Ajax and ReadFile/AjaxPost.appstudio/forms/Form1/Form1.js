btnAjax.onclick = function() {
  req=Ajax("ajaxPost.php" , "POST" , txtSend.value, done);
};

function done() {
  if(req.status == 200) { //success
    htmResponse.innerHTML=req.responseText;
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    htmResponse.innerHTML = msg;
  }
}
