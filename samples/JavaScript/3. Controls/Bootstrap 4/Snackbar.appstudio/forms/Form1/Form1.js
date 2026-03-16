 // Snackbars contain a single line of text directly related To the operation performed. 
 // They may contain a text action, but no icons.
 // also: https://codepen.io/wibblymat/pen/avAjq

Button1.onclick = function() {
  NSB.Snackbar("This is a warning about something." , "more?" , snackBarDismiss);
};

function snackBarDismiss() {
  NSB.MsgBox("Closed!");
}