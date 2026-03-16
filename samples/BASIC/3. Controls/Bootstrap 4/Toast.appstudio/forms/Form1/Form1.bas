Function Button1_onclick()
  $("#Toast1").toast("show")
End Function

Function Button2_onclick()
  $("#Toast2").toast("show")
End Function

Function Button3_onclick()
  Toast3_title.innerText = "Custom title"
  Toast3_subtitle.innerText = "Custom Subtitle"
  Toast3_text.innerHTML = "Text <b>can</b> include HTML styling and be <br> more than one line."
  $("#Toast3").toast("show")
End Function
