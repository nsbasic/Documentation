 //This sample shows a basic menu. Using the naming convention of 
 //the other menu controls, it probably should have been called
 //menuImageTitleArrow, because those are the columns it has.

 //The actual menu itself is completely defined in the IDE.
 //The code in this program is optional code to add, replace and
 //delete rows in the menu at runtime.

function Main() {
    lblStatusUpdate();
}

List1.onclick = function(i) {
   var itemText;
 //This gets executed when a menu item is clicked on
    if(TypeName(i)=="object" )  { return; };
    NSB.MsgBox("Menu item chosen: "  +  i  +  " "  +  List1.getItem(i));
};

btnDeleteAll.onclick = function() {
  List1.deleteItem("all");
  lblStatusUpdate();
};

btnAddItem.onclick = function() {
    if(List1.getItemCount() > 5) {
      NSB.MsgBox("too many items!");
      return;
    }

    List1.addItem(txtNewItemName.value);
    lblStatusUpdate();
};

btnReplaceItem.onclick = function() {
 var result;
  result = List1.replaceItem(txtReplaceWhich.value,txtNewItemName.value);
  if(result == -1) {
    NSB.MsgBox("Invalid item number argument.  No changes made");
 } else {
    lblStatusUpdate();
  }
};

btnDeleteOne.onclick = function() {
    List1.deleteItem();
    lblStatusUpdate();
};

function lblStatusUpdate() {
   var cnt;
    cnt = List1.getItemCount();
    if(cnt == 0) {
      lblStatus.textContent = "List is empty";
 } else {
      lblStatus.textContent = "List has " + cnt + " items, numbered 0 through " + (cnt - 1);
    }
}

