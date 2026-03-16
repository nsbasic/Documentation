PasswordInput2.onchange = function() {
  if(PasswordInput1.value != PasswordInput2.value) {
    NSB.MsgBox("Passwords do not match!");
  }
};
