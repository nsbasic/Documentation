var currentRecord;

function Main() {
  //If we're runnning for the first time, initialize localStorage.
  if (localStorage.studentInfo == undefined) {
    localStorage.studentInfo = JSON.stringify([]);
  }
  saves = JSON.parse(localStorage.studentInfo);
}

btnSave.onclick = function () {
  //Add the current student data to the saves() array.
  //No duplicate checking is done.
  var saves = createMultiDimArray(""),
    data;
  if (txtName.value == "") {
    return;
  }

  data = { name: txtName.value, age: TxtAge.value };

  saves = JSON.parse(localStorage.studentInfo);
  Push(saves, data);
  localStorage.studentInfo = JSON.stringify(saves);
};

btnFind.onclick = function () {
  //Go through the array of names and find the first match.
  var saves, i;
  currentRecord = -1;

  saves = JSON.parse(localStorage.studentInfo);
  for (i = 0; i <= UBound(saves); i++) {
    if (saves[i].name == txtFind.value) {
      NSB.MsgBox(saves[i].name + " is " + saves[i].age);
      currentRecord = i;
    }
  }
  if (currentRecord == -1) {
    NSB.MsgBox("Name not Found");
  }
};

btnDelete.onclick = function () {
  //Delete the current record
  saves = JSON.parse(localStorage.studentInfo);
  Splice(saves, currentRecord, 1);
  localStorage.studentInfo = JSON.stringify(saves);
};
