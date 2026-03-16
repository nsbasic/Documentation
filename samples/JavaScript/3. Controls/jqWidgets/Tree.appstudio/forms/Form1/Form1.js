if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

function Main() {
  imagesFolder="http://www.jqwidgets.com/jquery-widgets-demo/images/";

  source = [  { icon: imagesFolder  +  "mailIcon.png" , label: "Mail" , expanded: true, items: [  { icon: imagesFolder  +  "calendarIcon.png" , label: "Calendar" },  { icon: imagesFolder  +  "contactsIcon.png" , label: "Contacts" , selected: true }  ]},  { icon: imagesFolder  +  "folder.png" , label: "Inbox" , expanded: true, items: [  { icon: imagesFolder  +  "folder.png" , label: "Admin" },  { icon: imagesFolder  +  "folder.png" , label: "Corporate" },  { icon: imagesFolder  +  "folder.png" , label: "Finance" },  { icon: imagesFolder  +  "folder.png" , label: "Support" },  { icon: imagesFolder  +  "folder.png" , label: "Drafts" },  { icon: imagesFolder  +  "folder.png" , label: "Other" },  ]},  { icon: imagesFolder  +  "notesIcon.png" , label: "Notes" },  { iconsize: 14, icon: imagesFolder  +  "settings.png" , label: "Settings" },  { icon: imagesFolder  +  "favorites.png" , label: "Favorites" },  ];

NSB.jqxSettings["Tree1"].source=source;
  $("#Tree1").jqxTree(NSB.jqxSettings["Tree1"]);
}

Tree1.onselect = function(event) {
  menuItemText=$(event.args.element).text();
  console.log(menuItemText);
};
