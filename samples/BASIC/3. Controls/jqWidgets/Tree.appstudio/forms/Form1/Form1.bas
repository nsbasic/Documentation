If typeof(jQuery.jqx)<>"object" Then 
  MsgBox "The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder."
End If 

Sub Main()
  imagesFolder="http://www.jqwidgets.com/jquery-widgets-demo/images/"

  source = [ _
  { icon: imagesFolder & "mailIcon.png", label: "Mail", expanded: True, items: [ _
    { icon: imagesFolder & "calendarIcon.png", label: "Calendar" }, _
    { icon: imagesFolder & "contactsIcon.png", label: "Contacts", selected: True } _
  ]}, _
  { icon: imagesFolder & "folder.png", label: "Inbox", expanded: True, items: [ _
    { icon: imagesFolder & "folder.png", label: "Admin" }, _
    { icon: imagesFolder & "folder.png", label: "Corporate" }, _
    { icon: imagesFolder & "folder.png", label: "Finance" }, _
    { icon: imagesFolder & "folder.png", label: "Support" }, _
    { icon: imagesFolder & "folder.png", label: "Drafts" }, _
    { icon: imagesFolder & "folder.png", label: "Other" }, _
  ]}, _
  { icon: imagesFolder & "notesIcon.png", label: "Notes" }, _
  { iconsize: 14, icon: imagesFolder & "settings.png", label: "Settings" }, _
  { icon: imagesFolder & "favorites.png", label: "Favorites" }, _
  ]

NSB.jqxSettings["Tree1"].source=source
  $("#Tree1").jqxTree(NSB.jqxSettings["Tree1"])
End Sub

Function Tree1_onselect(event)
  menuItemText=$(event.args.element).text()
  console.log(menuItemText)
End Function
