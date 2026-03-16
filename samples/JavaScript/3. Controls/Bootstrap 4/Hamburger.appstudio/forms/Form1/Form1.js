Hamburger1.onclick = function(s) {
  if(typeof(s) == "object") {
    return;
  }
  NSB.MsgBox("Choice is "  +  s);
  if(s == "Sign Out") {
 // Do code For sign out.
  }
  if(s == "Reset Password") {
 // Do code For Reset Password.
  }
  if(s == "Change Email") {
 // Do code For Change Email.
  }
  if(s == "Delete Account") {
 // Do code For delete Account.
  }
};