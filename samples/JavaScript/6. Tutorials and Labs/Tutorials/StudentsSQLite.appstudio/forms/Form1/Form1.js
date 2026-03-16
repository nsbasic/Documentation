var DB;

function Main() {
 //Create database if it does not exist
  DB = SqlOpenDatabase("students.db" ,"1.0" ,"My Student Database");
  sqlList=[];
  sqlList[0]=["CREATE TABLE studentData('name', 'age', PRIMARY KEY('name') );" , success, fail];
  Sql(DB, sqlList);
}

function success() {
}

function fail() {
}

btnSave.onclick = function() {
  if(txtName.value=="" )  { return; };
  sqlList = [];
  sqlList[0]=["INSERT INTO studentData (name,age) VALUES (?,?)" ,  [txtName.value, TxtAge.value]];
  Sql(DB, sqlList);
};

btnFind.onclick = function() {
  sqlList=[];
  sqlList[0]=["SELECT * FROM studentData WHERE name=?" , txtFind.value, nameFound];
  Sql(DB, sqlList);
};

function nameFound(transaction, results) {
  if(results.rows.length>0) {
    NSB.MsgBox(results.rows.item(0).name  +  " is "  +  results.rows.item(0).age);
 } else {
    NSB.MsgBox("Name not found");
  }
}

btnDelete.onclick = function() {
  sqlList = [];
  sqlList[0]=["DELETE FROM studentData WHERE name=?" , txtFind.value, nameDeleted];
  Sql(DB, sqlList);
};

function nameDeleted() {
  NSB.MsgBox(txtFind.value  +  " Deleted");
}

