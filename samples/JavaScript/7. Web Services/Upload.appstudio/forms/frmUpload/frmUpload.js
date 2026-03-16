reader = new FileReader();
var fileData;

txtPhoto.onchange = function() {
  fileType = Mid(txtPhoto.value, InStrRev(txtPhoto.value,"."));
  switch (true) {
  case ((fileType) == ".txt" ): case ((fileType) ==  ".htm" ): case ((fileType) ==  ".html"):
    reader.readAsText(txtPhoto.files[0]);
	break;
  case ((fileType) == ".png" ): case ((fileType) ==  ".gif" ): case ((fileType) ==  ".jpg"):
    reader.readAsDataURL(txtPhoto.files[0]);
	break;
  default:
    reader.readAsBinaryString(txtPhoto.files[0]);
  }
};

reader.onload = function() {
  fileData = reader.result;
};

btnUpload.onclick = function() {
  if(Trim(txtPhoto.value) != "") {
    fileName = encodeURIComponent(Replace(txtPhoto.value, "C:\\fakepath\\" , ""));
    fileContent = encodeURIComponent(fileData);
 } else {
    fileName = encodeURIComponent(txtFileName.value);
    fileContent = encodeURIComponent(txaContents.value);
  }

  if(Trim(fileName) == "" || Trim(fileContent) == "") {
    NSB.MsgBox("Both filename and contents are required!");
 } else {
    req = Ajax("phpUpload.php" , "POST" , "file="  +  fileName  +  "&content="  +  fileContent, done);
  }
};

function done() {
  if(req.status == 200) { //success
    NSB.MsgBox("File uploaded!");
    txaContents.value = "";
    txtFileName.value = "";
    txtPhoto.value = "";
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    NSB.MsgBox(msg);
  }
}
