 //This sample emails the content of the form's input fields

 // See http://www.formspree.com for more info

btnSubmit.onclick = function() {
 //Send the form's data to the service
  data = {};
  data.message = txtMessage.value;
  data.name = txtName.value;
  data.email = txtEmail.value;
  data._subject = "Form data sent via Formspree";
  data.data = "george";

  settingsObject={};
  settingsObject.data = data;
  settingsObject.url = "//formspree.io/gh@nsbasic.com";
  settingsObject.method = "POST";
  settingsObject.dataType = "json";
  settingsObject.success = done;
  settingsObject.fail = done;
  console.log(settingsObject);
  req = Ajax(settingsObject);
};

function done() {
  if(req.status == 200) { //success
    NSB.MsgBox(req.responseText);
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    NSB.MsgBox(msg);
  }
}