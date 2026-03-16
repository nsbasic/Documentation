function Main() {
  txtCurrent.value=127828; //Cheezeburger
  txtCurrentHex.value=Hex(txtCurrent.value);
  lblEmoji.innerHTML="&#"  +  txtCurrent.value  +  ";";
}

btnDown.onclick = function() {
   txtCurrent.value=CLng(txtCurrent.value) - 1;
   txtCurrentHex.value=Hex(txtCurrent.value);
   lblEmoji.innerHTML="&#"  +  txtCurrent.value  +  ";";
};

btnUp.onclick = function() {
   txtCurrent.value=CLng(txtCurrent.value) + 1;
   txtCurrentHex.value=Hex(txtCurrent.value);
   lblEmoji.innerHTML="&#"  +  txtCurrent.value  +  ";";
};

txtCurrent.onchange = function() {
  lblEmoji.textContent="&#"  +  txtCurrent.value  +  ";";
  txtCurrentHex.value=Hex(txtCurrent.value);
};

txtCurrentHex.onchange = function() {
  txtCurrent.value=parseInt(txtCurrentHex.value,16);
  lblEmoji.innerHTML="&#"  +  txtCurrent.value  +  ";";
};

btnWiki.onclick = function() {
  location="http://en.wikipedia.org/wiki/Emoji";
};