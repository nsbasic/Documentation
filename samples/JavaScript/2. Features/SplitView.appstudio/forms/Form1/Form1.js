function Main() {
  Form2.show();
}

List1.onclick = function (choice) {
  if (TypeName(choice) != "object") {
    Textarea1.value = "Choice is " + choice;
  }
};
