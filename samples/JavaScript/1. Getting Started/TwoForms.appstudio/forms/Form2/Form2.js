TitleBar2.onclick = function(choice) {
  if(choice == "Prev" ) { ChangeForm(Form1, "slide" , "slide" , 1000); }
};


Form2.onshow = function() {
  Textarea2.text = Textarea2.text  +  "Form2_onshow()"  +  '\n';
}

Form2.onhide = function() {
  Textarea2.text = Textarea2.text  +  "Form2_onhide()"  +  '\n';
}