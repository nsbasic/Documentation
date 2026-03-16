var DB;

function Main() {
  DB = SqlOpenDatabase("localStorage");
  sqlList = [];
  sqlList[0] = [
    "CREATE TABLE studentData('name', 'age', PRIMARY KEY('name') );",
    success,
    fail,
  ];
  Sql(DB, sqlList);
}

function success() {
  console.log("success");
}

function fail(error) {
  NSB.MsgBox(error);
}

btnSave.onclick = function () {
  if (txtName.value == "") {
    return;
  }
  sqlList = [];
  sqlList[0] = [
    "INSERT INTO studentData (name,age) VALUES (?,?)",
    [txtName.value, txtAge.value],
    success,
    fail,
  ];
  Sql(DB, sqlList);
};

btnFind.onclick = function () {
  sqlList = [];
  sqlList[0] = [
    "SELECT * FROM studentData WHERE name=?",
    txtFind.value,
    nameFound,
  ];
  Sql(DB, sqlList);
};

function nameFound(transaction, results) {
  if (results.rows.length > 0) {
    NSB.MsgBox(results.rows.item(0).name + " is " + results.rows.item(0).age);
  } else {
    NSB.MsgBox("Name not found");
  }
  txtName.value = results.rows.item(0).name;
  txtAge.value = results.rows.item(0).age;
}

btnDelete.onclick = function () {
  sqlList = [];
  sqlList[0] = [
    "DELETE FROM studentData WHERE name=?",
    txtFind.value,
    nameDeleted,
  ];
  Sql(DB, sqlList);
  txtName.value = "";
  txtAge.value = "";
};

function nameDeleted() {
  NSB.MsgBox(txtFind.value + " Deleted");
}