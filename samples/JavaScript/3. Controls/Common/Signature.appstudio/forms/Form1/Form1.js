// See https github.com/szimek/signature_pad;
btnSave.onclick = function() {
  if(Signature1_signaturePad.isEmpty()) {
    NSB.MsgBox("No signature entered");
    return;
  }

 //Get the image in a string which can be saved.
 var imageStr = Signature1_signaturePad.toDataURL("image/png");

 //display the string in an Image control.
  Image1.src = imageStr;
};

btnClear.onclick = function() {
  Signature1_signaturePad.clear();
};
