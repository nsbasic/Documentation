
Button1.onclick = function() {
 //This panel displays HTML from the text property.
  Panel1.open();
};

function btnSaveClick() {
 //Called from Panel1
 var Name,Passwort;
  Name = $("#name").val();
  Passwort = $("#password").val();

  console.log($("#password").val());
  console.log($("#name").val());

  NSB.MsgBox("Your Name and Password : "  +  Name  +  " / "  +  Passwort);
}

function btnCancelClick() {
 //Called from Panel1
  NSB.MsgBox("Cancel clicked");
}

closePanel.onclick = function() {
 //Called from Panel1
  Panel1.close();
};

Button2.onclick = function() {
 //This panel displays a form.
  Panel3.open(Form2);
};
