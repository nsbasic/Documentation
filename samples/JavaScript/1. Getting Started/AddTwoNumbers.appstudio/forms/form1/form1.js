 //This sample allows the user to enter numbers into two text controls.
 //When the Add button is clicked on, the total is shown in the third text control.

cmdAdd.onclick = function() {
 //This function is called when the Add button is clicked.   
 var FirstNumber,SecondNumber,Total;

 //Before we can add, we have to convert the strings to numbers
  FirstNumber  = CSng(txtFirstNo.value);
  SecondNumber = CSng(txtSecondNo.value);
  Total = FirstNumber + SecondNumber;

  txtTotal.value = Total;

 //We could have done the above in one statement:
 //txtTotal.value = CSng(txtFirstNo.value) + CSng(txtSecondNo.value)
}

cmdReset.onclick = function() {
  txtFirstNo.value="";
  txtSecondNo.value="";
  txtTotal.value="";
};
