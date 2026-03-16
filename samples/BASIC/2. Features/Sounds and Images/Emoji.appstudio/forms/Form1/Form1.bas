Sub Main()
  txtCurrent.value=127828 'Cheezeburger
  txtCurrentHex.value=Hex(txtCurrent.value)
  lblEmoji.innerHTML="&#" & txtCurrent.value & ";"
End Sub

Function btnDown_onclick()
   txtCurrent.value=CLng(txtCurrent.value) - 1
   txtCurrentHex.value=Hex(txtCurrent.value)
   lblEmoji.innerHTML="&#" & txtCurrent.value & ";"
End Function

Function btnUp_onclick()
   txtCurrent.value=CLng(txtCurrent.value) + 1
   txtCurrentHex.value=Hex(txtCurrent.value)
   lblEmoji.innerHTML="&#" & txtCurrent.value & ";"  
End Function

Function txtCurrent_onchange()
  lblEmoji.textContent="&#" & txtCurrent.value & ";"
  txtCurrentHex.value=Hex(txtCurrent.value)
End Function

Function txtCurrentHex_onchange()
  txtCurrent.value=parseInt(txtCurrentHex.value,16)
  lblEmoji.innerHTML="&#" & txtCurrent.value & ";"
End Function

Function btnWiki_onclick()
  location="http://en.wikipedia.org/wiki/Emoji"
End Function