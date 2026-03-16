var queryParams;
queryParams = location.hash.split("/");
location.hash = "";

function Main() {
  enableButtons();
  butSignIn.disabled = $volt.auth.isLoggedIn();
  butSignOut.disabled = ! butSignIn.disabled;
  $("#Container1 button").prop("disabled" , true);

  if(queryParams.length > 1) {

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
  butSignOut.disabled = false;
  enableButtons();
  NSB.MsgBox("SignIn successful.");
}


 //---- Sign Out ----
butSignOut.onclick = function() {
  butSignIn.disabled = false;
  butSignOut.disabled = true;
  disableButtons();
  signout();
};
