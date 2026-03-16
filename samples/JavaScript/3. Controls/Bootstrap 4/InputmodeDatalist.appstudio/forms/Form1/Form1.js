
Select1.onchange = function() {
  $("#Input1_contents").attr("inputmode" , Select1.value);
};

Button1.onclick = function() {
  Input2.datalist = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"];
};
