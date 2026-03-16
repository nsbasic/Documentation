function Main() {
  $("#DropDownList2").jqxDropDownList("selectItem" , "two");
}

DropDownList2.onselect = function(event) {
  NSB.MsgBox(event.args.item.index + " " + event.args.item.value);
};
