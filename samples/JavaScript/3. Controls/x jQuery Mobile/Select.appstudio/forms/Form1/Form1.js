 //The Select control puts up a picker formatted for mobile devices.
 //It looks different on a desktop browser than it does on the device.

Select1.onchange = function() {
  NSB.MsgBox("Selected: "  +  Select1.selectedItem());
};

btnAddItem.onclick = function() {
 Select1.addItem("NoneDay");
};

btnClear.onclick = function() {
  Select1.clear();
};

btnSetIndex.onclick = function() {
  Select1.setIndex(2);
};

btnIndex.onclick = function() {
  NSB.MsgBox("Index: "  +  Select1.selectedIndex());
};

btnItem.onclick = function() {
  NSB.MsgBox(" Item: "  +  Select1.selectedItem());
};

btnValue.onclick = function() {
  NSB.MsgBox(" Value: "  +  Select1.selectedValue());
};
