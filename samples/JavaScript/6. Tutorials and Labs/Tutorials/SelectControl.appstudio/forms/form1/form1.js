function Main() {
var i;
for     (i=(0); i <= 6; i++) {
   selWeekDay.addItem(WeekdayName(i+1),WeekdayName(i+1));
}
}

selWeekDay.onchange = function() {
  txtDay.value=selWeekDay.selectedValue();
};