Select1.onchange = function() {
    $("#Input_item1").attr("inputmode", Select1.value);
};

Button1.onclick = function() {
    Input_item2.datalist = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
};