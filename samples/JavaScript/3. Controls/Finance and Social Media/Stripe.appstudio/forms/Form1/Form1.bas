Function Stripe1_onSetup()
  'Optional. Called when the Stripe control is clicked. 
  'Use it to set any values the Stripe dialog box needs.
  Stripe1.data.amount = TextBox2.value * 100  'amount is $99.95
  Stripe1.data.description = TextBox1.value
  'Put any data of your own into metadata
  Stripe1.data.metadata.productID = "6000"
End Function

Function Stripe1_onSalesTax()
  'Optional. Called after the user has entered his address and card,
  'but before the card is actually charged.
  'Can be used for Sales Tax, which may change based on the address entered.
  Dim ok = True
  If Stripe1.data.card.address_country = "Canada" Then
    var HST = Int(Stripe1.data.amount * .13)
    Stripe1.data.amount = Stripe1.data.amount + HST
    ok = confirm("HST of $" & FormatNumber(HST/100, 2) & _
    " will be added, for a total of $" & FormatNumber(Stripe1.data.amount/100, 2) & " USD.")
  End If
  'Return false here and the transaction will be cancelled.
  return ok
End Function

Function Stripe1_onApprovalReceived(token)
  If Stripe1.debugging Then console.log("Stripe: approval received", token)
  Stripe1.data.response = token
  
  'Now finalize the transaction with Stripe
  'Stripe1.data.decAmount = Stripe1.data.amount / 100
  
  If Stripe1.debugging Then console.log("Stripe: Calling " & Stripe1.chargeScript)
  $.post(Stripe1.chargeScript, Stripe1.data, Stripe1.onTransactionComplete)
End Function

Function Stripe1.onTransactionComplete(error, data)
  If error Then
    Print error
  Else
    If Stripe1.debugging Then console.log("Stripe: returned from " & Stripe1.chargeScript, data)
    MsgBox "Thank you! Your order was successful."
  End If
End Function
