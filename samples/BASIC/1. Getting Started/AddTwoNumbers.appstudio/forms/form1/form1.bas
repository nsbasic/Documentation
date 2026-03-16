'This sample allows the user to enter numbers into two text controls.
'When the Add button is clicked on, the total is shown in the third text control.

Sub cmdAdd_onclick 
  'This function is called when the Add button is clicked.   
  Dim FirstNumber, SecondNumber, Total
  
  'Before we can add, we have to convert the strings to numbers
  FirstNumber  = CSng(txtFirstNo.value)
  SecondNumber = CSng(txtSecondNo.value)
  Total = FirstNumber + SecondNumber
 
  txtTotal.value = Total

  'We could have done the above in one statement:
  'txtTotal.value = CSng(txtFirstNo.value) + CSng(txtSecondNo.value)
End Sub

Function cmdReset_onclick()
  txtFirstNo.value=""
  txtSecondNo.value=""
  txtTotal.value=""
End Function
