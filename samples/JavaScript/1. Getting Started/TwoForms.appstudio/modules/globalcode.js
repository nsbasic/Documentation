 //This project shows how to switch between forms.
 //The Project Properties have 'firstform' set to 'form1',
 //so that is the form which will be opened first.

 //This project also has bits of code showing 
 //what gets executed when.

var title = "This is global code, executed on startup.";

function Main() {
  Textarea1.text = title  +  '\n';
  Textarea1.text = Textarea1.text  +  "Sub Main. Called after app is loaded."  +  '\n';
}

