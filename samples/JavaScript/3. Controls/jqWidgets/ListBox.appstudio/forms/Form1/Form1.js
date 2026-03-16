 //
var s,item,multi,title,n,j,i,s;
multi = false;
title = "ListBox Selection";
 //
function Main() {
 // The source is a list of items
  source = ["Affogato" ,"Americano" ,"Bicerin" ,"Breve" ,"CaféBombón" ,"Caféaulait" ,  "CafféCorretto" ,"CaféCrema" ,"CafféLatte" ,"Caffémacchiato" ,"Cafémélange" ,  "Coffeemilk" ,"Cafemocha" ,"Cappuccino" ,"Carajillo" ,"Cortado" ,"Cubanespresso" ,  "Espresso" ,"Eiskaffee" ,"TheFlatWhite" ,"Frappuccino" ,"Galao" ,"Greekfrappécoffee" ,  "IcedCoffee﻿" ,"Indianfiltercoffee" ,"Instantcoffee" ,"Irishcoffee" ,"Liqueurcoffee"];
  $("#ListBox1").jqxListBox({source: source});
 // set the selected index back to 0
  $("#ListBox1").jqxListBox({selectedIndex: 0});
}


btnShow.onclick = function() {
  j = "";
  if(multi == false) {
    item = $("#ListBox1").jqxListBox("getSelectedItem").value;
    NSB.MsgBox("Item = "  +  item,0,title);
 } else {
 // getSelectedItems is an array. 
 // i gets the number of selected items in the array
 // s gets the selected item from the array  
    i = Len($("#ListBox1").jqxListBox("getSelectedItems"));
  for     (n = (1); n  <= i; n ++) {
    s = $("#ListBox1").jqxListBox("getSelectedItems")[n-1].value;
    j = j  +  " "  +  s;
   }
     NSB.MsgBox("Items = "  +  j,0,title);
  }
};

SwitchButton1.onclick = function() {
  multi=$("#SwitchButton1").jqxSwitchButton("checked");
  $("#ListBox1").jqxListBox({multiple: multi});
  if(multi==true) {
    btnShow.value = "Show Selected Items";
 } else {
    $("#ListBox1").jqxListBox("clearSelection");
    btnShow.value = "Show Selected Item";
  }
};
