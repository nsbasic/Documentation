frmView.onshow = function() {
  imgFileContent.hide();
  imgFileContent.src = "";
  lblFileName.textContent = selectedFileName;
  txaFileContent.value = "";
  txaFileContent.show();

  req = Ajax("phpView.php?file="  +  encodeURIComponent(selectedFileName), viewCallback);
};

function viewCallback() {
 if(req.status == 200) { //success
    if(Left(req.responseText, 11) == "data:image/") {
      imgFileContent.childNodes[0].src = req.responseText;
      txaFileContent.hide();
      imgFileContent.show();
 } else {
      txaFileContent.value = req.responseText;
    }
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    NSB.MsgBox(msg);
  }
}

