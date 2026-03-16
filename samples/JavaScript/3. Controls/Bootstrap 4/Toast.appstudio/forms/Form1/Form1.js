Button1.onclick = function() {
  $("#Toast1").toast("show");
};

Button2.onclick = function() {
  $("#Toast2").toast("show");
};

Button3.onclick = function() {
  Toast3_title.innerText = "Custom title";
  Toast3_subtitle.innerText = "Custom Subtitle";
  Toast3_text.innerHTML = "Text <b>can</b> include HTML styling and be <br> more than one line.";
  $("#Toast3").toast("show");
};
