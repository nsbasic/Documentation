 // Form1 Code 
var name,birthday,dayofweek;
var a,b,c;

function Main() {
  Select1.clear();
  for     (i=(0); i <= 11; i++) {
    Select1.addItem(i+1);
  }
  Select2.clear();
  for     (i=(0); i <= 30; i++) {
    Select2.addItem(i+1);
  }
  Select3.clear();
  for     (i=(0); i <= 110; i++) {
    Select3.addItem(i+1900);
  }
}

 // Check to see if Select has recieved an input
 // combo box for month 
Select1.onchange = function() {
  a=Select1.selectedItem();
 //MsgBox "selectedIndex is " & Select1.selectedIndex() & " with value " & a 
};

Select2.onchange = function() {
  b=Select2.selectedItem();
 // MsgBox "selectedIndex is " & b.selectedIndex & " with value " & b.value 
};

Select3.onchange = function() {
  c=Select3.selectedItem();
 //MsgBox "selectedIndex is " & c.selectedIndex & " with value " & c.value 
};

Button1.onclick = function() {
  birthday = a  +  "/ "  +  b  +  "/ "  +  c;
 //MsgBox "Birthday = " & birthday 
  Text2.value = Text1.value;
  Text3.value = birthday;
  dayofweek = Weekday(birthday);
 //MsgBox "Day of Week = " & dayofweek 
  Text4.value = WeekdayName (dayofweek);
  ChangeForm(Form2);
};

TitleBar1.onclick = function(choice) {
  if(choice=="Next") {
    ChangeForm(Form2);
   }
};
