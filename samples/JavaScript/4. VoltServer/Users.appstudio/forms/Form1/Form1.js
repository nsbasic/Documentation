var queryParams;
queryParams = location.hash.split("/");
location.hash = "";

function Main() {
  if((queryParams.length > 1)) {
    if(queryParams[1] == "confirm") {
      $volt.auth.logout();
      $volt.auth.confirm(queryParams[2], confirmCallback);
    }
  }
}

inpPassword.onchange = function() {
  CheckPassword(this);
};

inpPasswordConfirm.onchange = function() {
  CheckPassword(this);
};

butAddUser.onclick = function() {
  if(CheckPassword(inpPassword) && CheckPassword(inpPasswordConfirm)) {
    $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, inpAppID.value, addUserCallback);
  }
};

function addUserCallback(error, data) {
  if(error) {
    if(data.message == "Password too weak.") {
      NSB.MsgBox(formatErrorMessage(data));
      return;
    }


    if(data.message == "Invalid Request Body.") {
      NSB.MsgBox(data.message  +  " Did you fill in all the fields?");
      return;
    }

    if(data.message == "Could not decode scope.") {
      NSB.MsgBox(data.message  +  " Are you sure the App ID is correct?");
      return;
    }

    NSB.MsgBox(data.message);
    console.log(data);
 } else {
    NSB.MsgBox("A confirmation email has been sent (if Confirm Page has been set for the app.)");
  }
}


function formatErrorMessage(data) {
 var s,i,p;
  s = data.message;
  p = data.validations.password;
  for     (i = (0); i  <= p.length - 1; i ++) {
    s += "<br>• " + p[i];
  }
  return s;
}



function confirmCallback(error, data) {
  if(error) {
    NSB.MsgBox(data.message);
    return;
 } else {
    console.log("confirm" , data);
    NSB.MsgBox("Your account is confirmed. Have a nice day!");
  }
}

function CheckPassword(inputtxt) {
  var ok = false;
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 
  ok = (inputtxt.value.match(decimal) != null)
  if (inputtxt.value.length>19) ok = true;
  if (ok) {
    Alert1.hide();
  } else {
    Alert1.show();
  }
  return ok
}
