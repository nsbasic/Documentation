if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

var source;

function Main() {
  source = [  {label: "Home" },  {label: "Products" , items: [  {label: "Product A" },  {label: "Product B" } ]  },  {label: "Buy" },  {label: "Contact" },  {label: "About"}];

  NSB.jqxSettings["Menu1"].source=source;
  NSB.jqxSettings["Menu2"].source=source;

  $("#Menu1").jqxMenu(NSB.jqxSettings["Menu1"]);
  $("#Menu2").jqxMenu(NSB.jqxSettings["Menu2"]);
}

Menu1.onitemclick = function(event) {
  menuItemText=$(event.target).text();
  console.log(menuItemText);
};

