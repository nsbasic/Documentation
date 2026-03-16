Sub cmdAdd_onclick   
  Dim FirstNumber
  Dim SecondNumber
  Dim Total
  
  FirstNumber  = CSng(txtFirstNo.value)
  SecondNumber = CSng(txtSecondNo.value)
  Total = FirstNumber + SecondNumber

  txtTotal.value = Total
End Sub
