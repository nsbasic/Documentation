//This sample shows how to access SQLite from NS Basic/App Studio.
//It also shows how to copy an SQLite database into a JSON string for uploading.
//See Tech Note 15 for more information

var databaseSize; //number of records in the database
var DB; //the database itself
var startTime; //used for timer
var lastSQL; //the last SQL statement. Useful for debugging.
var total; //use to total sales from customers
var DBRecords; //the last set of records selected from DB
var count; //the number of records counted
var DBjson; //JSON form of database

databaseSize = 200;

//***************** Button Handlers *********************
btnCreate.onclick = function () {
  total = 0;
  initDB();
};

btnCount.onclick = function () {
  //This function goes through all the rows in the database
  //and totals up the "sales" column. It's useful to see how quickly
  //each of the items on the database can be accessed.

  total = 0;
  startTime = SysInfo(10);
  if (TypeName(DBRecords) == "null") {
    NSB.MsgBox("Database not created");
    return;
  }

  for (i = 0; i <= DBRecords.rows.length - 1; i++) {
    total = total + DBRecords.rows.item(i)["sales"];
  }
  txtMessage.value =
    "Total of " +
    DBRecords.rows.length +
    " recs is " +
    total +
    " in " +
    (SysInfo(10) - startTime) +
    " milliseconds.";
};

btnRandom.onclick = function () {
  //This function does random selections on the database - not sequential.
  //It does this by making an array with one entry for each selection,
  //then passing the entire array to be processed.
  //As each selection is completed,
  //  Random_Total is called to add the sales for the selected row.
  //When all the entries are completed,
  //  Random_Complete is called to give the total.
  //This is useful to see how fast lots of small selections are.
  var sqlList;
  startTime = SysInfo(10);
  total = 0;
  count = 0;
  sqlList = [];

  for (j = 0; j <= databaseSize - 1; j++) {
    //Random_Total is called as each selection is completed.
    sqlList.push([
      "SELECT * FROM customerData WHERE name=?",
      "Customer" + jsFix(Rnd() * databaseSize),
      Random_Total,
    ]);
  }

  //Execute all the commands)
  Sql(DB, sqlList);
};

function Random_Total(transaction, results) {
  //called as random selections are completed.
  total = total + results.rows.item(0)["sales"];
  count = count + 1;
  if (count == databaseSize) {
    txtMessage.value =
      "Total of " +
      databaseSize +
      " random recs is " +
      total +
      " in " +
      (SysInfo(10) - startTime) +
      " milliseconds.";
  }
}

btnSQLExport.onclick = function () {
  if (typeof DB == "undefined") {
    NSB.MsgBox("Use the Create button to create a database");
  } else {
    NSB.ShowProgress("Exporting database...");
    DBjson = SQLExport(DB, "customer.db", exportComplete);
  }
};

function exportComplete() {
  NSB.ShowProgress(false);
  txtMessage.value = JSON.stringify(DBjson);
}

btnSQLImport.onclick = function () {
  if (typeof DBjson == "undefined") {
    NSB.MsgBox("Use the SQLExport button to create a data to import");
  } else {
    SQLImport(DBjson, DB, importComplete);
  }
};

function importComplete(s) {
  console.log("importComplete() called. " + s);
  //refresh the selection
  sqlList = new Array([
    "SELECT * from customerData ORDER BY name;",
    dataHandler,
  ]);
  Sql(DB, sqlList);
  txtMessage.value = "Import completed.";
}

btnClear.onclick = function () {
  if (DB.filename == "local") {
    DB.clearStorage();
  }
  DBRecords = undefined;
  txtMessage.value = "Customer data cleared.";
};

//***************** Functions to do the work *********************
function initDB() {
  //This function creates the database if it does not exist already.
  //If it does exist, it clears out all the data
  //It then populates it with random data.
  var sqlList;
  DB = SqlOpenDatabase("localStorage");
  startTime = SysInfo(10);

  sqlList = [];
  sqlList.push(["DROP TABLE customerData;", , skipError]);
  Sql(DB, sqlList);

  sqlList = [];
  sqlList.push([
    "CREATE TABLE IF NOT EXISTS customerData('name', 'address1', 'address2', 'age', 'sales', PRIMARY KEY('name') )",
  ]);

  //Add commands to the array to add rows to it.
  //Each row is a fresh array entry.
  for (i = 0; i <= databaseSize - 1; i++) {
    Name = "Customer" + i;
    Address1 = i + " Winding River Lane";
    Address2 = "Anytown USA " + 10000 + i;
    Age = _jsCint(Rnd() * 100);
    Sales = _jsCint(Rnd() * 100000);
    args = [Name, Address1, Address2, Age, Sales];
    sqlList.push([
      "INSERT INTO customerData (name, address1, address2, age, sales) VALUES (?,?,?,?,?);",
      args,
    ]);
  }

  //Finally, put a command at the end to select all the rows.
  sqlList.push(["SELECT * from customerData ORDER BY name;", dataHandler]);

  //Now, execute all the commands!
  Sql(DB, sqlList);
}

function dataHandler(transaction, results) {
  //Called On completion of Sql command
  DBRecords = results;
  txtMessage.value =
    "Recs created: " +
    DBRecords.rows.length +
    " in " +
    (SysInfo(10) - startTime) +
    " milliseconds.";
}

function skipError(transaction, results) {
  //Called On failure of Sql command
}

btnDelete.onclick = function () {
  var SQList;
  SQList = [];
  //Note no success or fail callbacks!
  SQList.push(["DELETE FROM customerData"]);
  SQList.push(["SELECT * from customerData ORDER BY name;", dataHandler]);
  Sql(DB, SQList);
  txtMessage.value = "All rows deleted.";
};

btnLookup.onclick = function () {
  var SQList;
  SQList = [];
  //Note no success or fail callbacks!
  SQList.push([
    "SELECT * from customerData WHERE name='Customer10';",
    lookupHandler,
    lookupFailed,
  ]);
  Sql(DB, SQList);
};

function lookupHandler(transaction, results) {
  console.log("lookupHandler", results);
  //Called On completion of Sql command
  lookups = results.rows.rows;
  txtMessage.value = "Rows returned: " + lookups.length + " " + lookups[0].name;
}

function lookupFailed(err) {
  NSB.MsgBox(err);
}
