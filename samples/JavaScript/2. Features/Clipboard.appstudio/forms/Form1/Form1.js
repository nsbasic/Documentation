Input1.oncopy = function(event) {
  length = Input1.selectionEnd - Input1.selectionStart;
  selectedText = Mid(Input1.value, Input1.selectionStart+1, length);
  modifiedText = UCase(selectedText);

  clipboardData = event.clipboardData;
  clipboardData.setData("text/plain" , modifiedText);
 //Stop the default copy from the field.
  event.preventDefault();

  NSB.MsgBox("Selected text:"  +  selectedText  +  '\n'  +  "Changed to:"  +  modifiedText  +   '\n'  +  "Right click to paste in other fields.");

};

Input2.onpaste = function(event) {
  clipboardData = event.clipboardData;
  tobePasted = clipboardData.getData("text/plain");
  Input2.value = tobePasted  +  " was pasted";
 //Stop the default paste to the field.
  event.preventDefault();

  NSB.MsgBox("Pasted text:"  +  tobePasted  +  '\n'  +  "Change to:"  +  Input2.value);
};

Textarea1.onpaste = function(event) { //Paste as HTML
  clipboardData = event.clipboardData;
  tobePasted = clipboardData.getData("text/html");
  Textarea1.innerHTML = tobePasted  +  " was pasted";
 //Stop the default paste to the field.
  event.preventDefault();

  NSB.MsgBox("Pasted text:"  +  tobePasted  +  '\n'  +  "Change to:"  +  Input2.value);
};

btnCopy.onclick = function() {
 //execCommand does not work on all browsers and platforms
  Input1.select();
  document.execCommand("Copy");
};
