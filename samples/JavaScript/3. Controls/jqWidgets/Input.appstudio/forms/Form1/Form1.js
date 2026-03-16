 //** Input.nsx demo

var countries,whichOne;
countries=[];
countries= new Array("Afghanistan" , "Albania" , "Algeria" , "Andorra" , "Angola" , "Antarctica" , "Antigua and Barbuda" , "Argentina" , "Armenia" , "Australia" , "Austria");

Form1.onshow = function() {
  setInput();
};

function setInput() {
 //** Note that currently you cannot change the placeHolder text in code
 //** If the text has been set in Properties, it cannot be changed.
 //** If not set in Properties, it can be set once, but not changed again.
 //** All other Properties can be changed.
 //** Lines one and two below will have the same result as the placeHolder was set in Properties.
 //** Line three will create a dropdown box with 8 items as set in Properties.

  $("#ipCountry").jqxInput({ placeHolder: "Enter a country starting with A." , source: countries, items: 6 });
 //  $("#ipCountry").jqxInput({ source: countries, items: 6 });
 //  $("#ipCountry").jqxInput({ source: countries });
}

ipCountry.onchange = function() { //read the selection
  whichOne=$("#ipCountry").val();
  NSB.MsgBox(whichOne);
};

ipNumber.onchange = function() { //read the selection
  whichOne=$("#ipNumber").val();
  NSB.MsgBox(whichOne);
};
