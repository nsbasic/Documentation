TITLE = "MsgBox Tour";

Button1.onclick = function() { //Simple Message
  NSB.MsgBox("Hello World!" ,0," ");
};

Button2.onclick = function() { //Simple Message with a custom title
  NSB.MsgBox("Brief Tour of MSGBOX!" ,0, TITLE);
 //close the MsgBox if no answer in 5 seconds
  setTimeout("NSB.closeMsgBox()" ,5000);
};

Button3.onclick = function() { //Yes/No Prompt
  NSB.MsgBox(Button3done,"Do you like this tour?" , 4+32, TITLE);
};

function Button3done(result) {
  if(result==6 ) { Text1.value="Yes";  } else {  Text1.value="No"; }
}

Button4.onclick = function() { //Custom Buttons
  NSB.MsgBox(Button4done,"How is NSB/AppStudio?" , "Fun,Great,Sweet" , TITLE);
};

function Button4done(result) {
  Text2.value=result;
}

Button5.onclick = function() { //Custom Button and Icon
  NSB.MsgBox("Who is the Happy Guy?" , "Mario;includes/mario.jpg" , TITLE);
};

Button6.onclick = function() { //InputBox
  NSB.InputBox(Button6done,"What am I thinking?" , "InputBox Example");
};

function Button6done(result, value) {
  if(result==1 ) { Text3.value=value;  } else {  Text3.value="Cancel"; }
}
