function Main() {
  Date1.value = "2014-05-23";
  DateTime1.value = "2014-05-23T14:03";
  Month1.value = "2014-05";
  Time1.value = "14:03";
}

Button1.onclick = function() {
 NSB.MsgBox("Date: "  +  Date1.value  +  '\n'  +   "DateTime: "  +  DateTime1.value  +  '\n'  +   "Month: "  +  Month1.value  +  '\n'  +   "Time: "  +  Time1.value);
};
