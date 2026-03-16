If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Dim source

Sub Main()
  source = [ _
  {label: "Home" }, _
  {label: "Products", items: [ _
    {label: "Product A" }, _
    {label: "Product B" } ] _
  }, _
  {label: "Buy" }, _
  {label: "Contact" }, _
  {label: "About"}]

  NSB.jqxSettings["Menu1"].source=source
  NSB.jqxSettings["Menu2"].source=source

  $("#Menu1").jqxMenu(NSB.jqxSettings["Menu1"])
  $("#Menu2").jqxMenu(NSB.jqxSettings["Menu2"])
End Sub

Function Menu1_onitemclick(event)
  menuItemText=$(event.target).text()
  console.log(menuItemText)
End Function

