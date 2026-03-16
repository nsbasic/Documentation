//This app deploys the well known Northwind test database.
//The database is automatically deployed with the app and is usable right away.
var DB; //The database
var DBrecords; //The current set of selected records

function loadGrid(e) {
  console.log("loadGrid called: " + e);
  NSB.ShowProgress("Loading grid with customers...");
  DB = SqlOpenDatabase("Northwind.db");
  s = new Array(["Select * from Customers ORDER BY CustomerID;", dataHandler]);
  Sql(DB, s);
}

function dataHandler(transaction, result) {
  console.log("dataHandler called");
  DBrecords = result;
  for (i = 0; i <= DBrecords.rows.length - 1; i++) {
    record = DBrecords.rows.item(i);
    Grid1.setValue(i + 1, 0, record["CustomerID"]);
    Grid1.setValue(i + 1, 1, record["CompanyName"]);
    Grid1.setValue(i + 1, 2, record["City"]);
    Grid1.setValue(i + 1, 3, record["Country"]);
  }
  Grid1.refresh();
  NSB.ShowProgress(false);
}

HeaderBar1.onclick = function (button) {
  if (TypeName(button) == "object") {
    return;
  }
  s = new Array([
    "UPDATE Customers SET CompanyName=? WHERE CustomerID=?;",
    ["NewCo", "ALFKI"],
    loadGrid,
  ]);
  Sql(DB, s);
};
HeaderBar1_btnRight.onclick = function () {
  HeaderBar1.onclick("Update");
};
