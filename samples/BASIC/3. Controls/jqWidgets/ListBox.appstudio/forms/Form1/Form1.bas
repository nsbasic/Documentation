'
Dim s, item, multi, title, n, j, i, s
multi = False
title = "ListBox Selection"
'
Sub Main()
  ' The source is a list of items
  source = ["Affogato","Americano","Bicerin","Breve","CaféBombón","Caféaulait", _
    "CafféCorretto","CaféCrema","CafféLatte","Caffémacchiato","Cafémélange", _
    "Coffeemilk","Cafemocha","Cappuccino","Carajillo","Cortado","Cubanespresso", _
    "Espresso","Eiskaffee","TheFlatWhite","Frappuccino","Galao","Greekfrappécoffee", _
    "IcedCoffee﻿","Indianfiltercoffee","Instantcoffee","Irishcoffee","Liqueurcoffee"]
  $("#ListBox1").jqxListBox({source: source});
  ' set the selected index back to 0
  $("#ListBox1").jqxListBox({selectedIndex: 0});
End Sub


function btnShow_onclick()
  j = ""
  if multi = False Then
    item = $("#ListBox1").jqxListBox("getSelectedItem").value
    NSB.MsgBox ("Item = " & item,0,title) 
  else
    ' getSelectedItems is an array. 
    ' i gets the number of selected items in the array
    ' s gets the selected item from the array  
    i = Len($("#ListBox1").jqxListBox("getSelectedItems"))
  for n = 1 To i
    s = $("#ListBox1").jqxListBox("getSelectedItems")[n-1].value
    j = j & " " & s
   Next
     NSB.MsgBox ("Items = " & j,0,title)
  End if
End function

function SwitchButton1_onclick()
  multi=$("#SwitchButton1").jqxSwitchButton("checked")
  $("#ListBox1").jqxListBox({multiple: multi})
  if multi=True Then
    btnShow.value = "Show Selected Items"
  else
    $("#ListBox1").jqxListBox("clearSelection")
    btnShow.value = "Show Selected Item"
  End if  
End function
