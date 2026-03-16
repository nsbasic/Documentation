Button1.onclick = function() {
  $("#MaskedInput1").jqxMaskedInput("clearValue");
  $("#MaskedInput2").jqxMaskedInput("clearValue");
  $("#MaskedInput3").jqxMaskedInput("clearValue");
  $("#MaskedInput4").jqxMaskedInput("clearValue");
  $("#MaskedInput5").jqxMaskedInput("clearValue");
};

MaskedInput1.onchange = function() {
  NSB.MsgBox("new value of Numeric is "  +  MaskedInput1.value);
};
