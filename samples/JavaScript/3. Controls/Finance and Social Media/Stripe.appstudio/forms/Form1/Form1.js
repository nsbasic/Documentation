Stripe1.onSetup = function() {
 //Optional. Called when the Stripe control is clicked. 
 //Use it to set any values the Stripe dialog box needs.
  Stripe1.data.amount = TextBox2.value * 100; //amount is $99.95
  Stripe1.data.description = TextBox1.value;
 //Put any data of your own into metadata
  Stripe1.data.metadata.productID = "6000";
};

Stripe1.onSalesTax = function() {
 //Optional. Called after the user has entered his address and card,
 //but before the card is actually charged.
 //Can be used for Sales Tax, which may change based on the address entered.
 var ok = true;
  if(Stripe1.data.card.address_country == "Canada") {
    var HST = Math.floor(Stripe1.data.amount * .13);
    Stripe1.data.amount = Stripe1.data.amount + HST;
    ok = confirm("HST of $"  +  FormatNumber(HST/100, 2)  +   " will be added, for a total of $"  +  FormatNumber(Stripe1.data.amount/100, 2)  +  " USD.");
  }
 //Return false here and the transaction will be cancelled.
  return ok;
};

Stripe1.onApprovalReceived = function(token) {
  if(Stripe1.debugging ) { console.log("Stripe: approval received" , token); }
  Stripe1.data.response = token;

 //Now finalize the transaction with Stripe
 //Stripe1.data.decAmount = Stripe1.data.amount / 100

  if(Stripe1.debugging ) { console.log("Stripe: Calling "  +  Stripe1.chargeScript); }
  $.post(Stripe1.chargeScript, Stripe1.data, Stripe1.onTransactionComplete);
};

Stripe1.onTransactionComplete = function(error, data) {
  if(error) {
    NSB.Print((error) + "<br>");
 } else {
    if(Stripe1.debugging ) { console.log("Stripe: returned from "  +  Stripe1.chargeScript, data); }
    NSB.MsgBox("Thank you! Your order was successful.");
  }
};Stripe1.onTransactionComplete =Stripe1.onTransactionComplete;
