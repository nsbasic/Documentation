 //Demonstrate NSB.InputBox
Button1.onclick = function() { //InputBox
  NSB.InputBox(InputDone,"What am I thinking?" , "InputBox Example" , "Elephants");
};

function InputDone(result, value) {
  if(result==1) {
    TextBox1.value=value;
 } else {
    TextBox1.value="Cancel";
  }
}
