'** Input.nsx demo

Dim countries, whichOne
countries=[]
countries = Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria")

Function Form1_onshow()
  setInput()
End Function

Function setInput()
  '** Note that currently you cannot change the placeHolder text in code
  '** If the text has been set in Properties, it cannot be changed.
  '** If not set in Properties, it can be set once, but not changed again.
  '** All other Properties can be changed.
  '** Lines one and two below will have the same result as the placeHolder was set in Properties.
  '** Line three will create a dropdown box with 8 items as set in Properties.
  
  $("#ipCountry").jqxInput({ placeHolder: "Enter a country starting with A.", source: countries, items: 6 });
'  $("#ipCountry").jqxInput({ source: countries, items: 6 });
'  $("#ipCountry").jqxInput({ source: countries });
End Function

Function ipCountry_onchange()            'read the selection
  whichOne=$("#ipCountry").val(); 
  MsgBox(whichOne)             
End Function

Function ipNumber_onchange()            'read the selection
  whichOne=$("#ipNumber").val(); 
  MsgBox(whichOne)             
End Function
