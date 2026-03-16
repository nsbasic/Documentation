
Button1.onclick = function() {

var arr,n,s;

s = "ubound(Select1.selectedItem()): "  +  UBound(Select1.selectedItem());
arr = Select1.selectedItem();
for     (n = (0); n  <= UBound(arr); n ++) {
  s = s  +  '\n'  +  "Select1.selectedItem()["  +  n  +  "]: "  +  Select1.selectedItem()[n];
}

 NSB.MsgBox(Select1.selectedIndex()  +  '\n'   +  Select1.selectedValue()  +  '\n'   +  Select1.selectedItem()  +  '\n'  +  '\n'   +  s);
};