cmdAdd.onclick = function() {
 var FirstNumber;
 var SecondNumber;
 var Total;

  FirstNumber  = CSng(txtFirstNo.value);
  SecondNumber = CSng(txtSecondNo.value);
  Total = FirstNumber + SecondNumber;

  txtTotal.value = Total;
}
