var queryParams;
queryParams = location.hash.split("/");
location.hash = "";

function Main() {
  butSignIn.disabled = false;
  $("#Container1 button").prop("disabled" , true);

  if((queryParams.length > 1)) {

    if(queryParams[1] == "confirm") {
      $volt.auth.logout();
      $volt.auth.confirm(queryParams[2], confirmCallback);
    }

    if(queryParams[1] == "reset") {
      $volt.auth.logout();
      showResetPassword();
    }

  }
}


 //---- Confirm an account ----
function confirmCallback(error, data) {
  if(error) {
    NSB.MsgBox(data.message);
    return;
 } else {
    console.log("confirm" , data);
    NSB.MsgBox("Your account is confirmed. Have a nice day!");
  }
}


 //---- Sign in ----
butSignIn.onclick = function() {
  showSignIn(signInCallback);
};

function signInCallback() {
  butSignIn.disabled = true;
  $("#Container1 button").prop("disabled" , false);
  NSB.MsgBox("SignIn successful.");
}


 //---- Sign Out ----
butSignOut.onclick = function() {
  butSignIn.disabled = false;
  $("#Container1 button").prop("disabled" , true);
  signout();
};


 //---- Change Email ----
butEmail.onclick = function() {
  showChangeEmail();
};


 //---- Change Password ----
butPassword.onclick = function() {
  showChangePassword();
};


 //---- Delete Account ----
butDelete.onclick = function() {
  NSB.MsgBox(deleteAccount, "This cannot be undone!" , 1, "Delete Volt Account?");
};

function deleteAccount(result) {
  if(result == 1 ) { $volt.user.delete(auth.user_id, deleteAccountCallback); }
}

function deleteAccountCallback(error, data) {
  butSignOut.onclick();
  if(error) {
    if(data == undefined ) { data = {message: "Network Error"}; }
    NSB.MsgBox(data.message);
  }
}

 //---- Send Email ----
butSendEmail.onclick = function() {
 var subject = "Email from "  +  AppTitle;
 var text = "This message was sent from a Volt app to the currently signed on user.";
  setBusyIcon(this);
  $volt.email.send(subject, text, sendEmailCallback);
};

function sendEmailCallback(error, data) {
  clearBusyIcon(this);
  if(error) {
    if(data == undefined ) { data = {message: "Network Error"}; }
    NSB.MsgBox(data.message);
 } else {
    NSB.MsgBox("Email Sent.");
  }
}