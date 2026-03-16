var files;
var selectedFileName;

frmFiles.onshow = function() {
  lstFiles.deleteItem("all");

  req = Ajax("phpView.php" , fileCallback);
};

function fileCallback() {
  if(req.status == 200) { //success
    files = Split(req.responseText, '\n');

    for     (i = (0); i  <= files.length - 1; i ++) {
      if(Trim(files[i] ) != "") {
        lstFiles.addItem(files[i] );
      }
    }
 } else { //failure
    if(req.status == 404) {
      req.err = "No files found!";
 } else { //failure
      msg = "Error: Status = "  +  req.status;
      if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
      if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
      NSB.MsgBox(msg);
    }
}

return returnValue; }

lstFiles.onclick = function(i) {
  if(TypeName(i) == "object" )  { return; };
  selectedFileName = files[i];
  ChangeForm(frmView);
};
