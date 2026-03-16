 //This is the code for Form1. It responds to the Next button
 //in the title bar.

TitleBar1.onclick = function(choice) {
  if(choice=="Next" ) { ChangeForm(Form2, "fade"); }
};

Form1.onshow = function() {
  Textarea1.text = Textarea1.text  +  "Form1_onshow()"  +  '\n';
}

Form1.onhide = function() {
  Textarea1.text = Textarea1.text  +  "Form1_onhide()"  +  '\n';
}

TitleBar1_btnRight.onclick = function(){TitleBar1.onclick("Next")}