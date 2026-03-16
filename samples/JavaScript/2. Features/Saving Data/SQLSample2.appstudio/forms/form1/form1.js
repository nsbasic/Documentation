//This sample shows how to access SQLite from NSB/AppStudio
//See Tech Note 15 for more information

var databaseSize; //number of records in the database
var DB; //the database itself
var startTime; //used for timer
var lastSQL; //the last SQL statement. Useful for debugging.
var total; //use to total sales from customers
var DBRecords; //the last set of records selected from DB
var iRec; //record number of record being processed, starting with 0
var nTables; //number of tables in the database (when it works)

databaseSize = 22;
btnCreate.value = "Create /" + "\n" + "Open DB";

btnCreate.onclick = function () {
  total = 0;
  initDB();
};

btnCount.onclick = function () {
  total = 0;
  startTime = SysInfo(10);
  for (i = 0; i <= DBRecords.rows.length - 1; i++) {
    total = total + DBRecords.rows.item(i)["sales"];
  }
  txtMessage.value =
    "Total sales of " +
    DBRecords.rows.length +
    " recs is " +
    total +
    " in " +
    (SysInfo(10) - startTime) +
    " milliseconds.";
};

btnRandom.onclick = function () {
  var sqlList;
  startTime = SysInfo(10);
  total = 0;
  sqlList = [];
  for (j = 0; j <= databaseSize - 1; j++) {
    sqlList[j] = [
      "SELECT * FROM customerData WHERE name=?",
      "cust" + jsFix(Rnd() * databaseSize),
      Random_Total,
    ];
  }

  sqlList[databaseSize - 1][2] = Random_Complete;
  Sql(DB, sqlList);
};

function Random_Total(transaction, results) {
  total = total + results.rows.item(0)["sales"];
}

function Random_Complete(transaction, results) {
  txtMessage.value =
    "Total of " +
    databaseSize +
    " random recs is " +
    total +
    " in " +
    (SysInfo(10) - startTime) +
    " milliseconds.";
}

function initDB() {
  var sqlList;
  DB = SqlOpenDatabase("localStorage", "1.0", "My Customer Database");
  if (DB != 0) {
    startTime = SysInfo(10);
    nTables = -1;
    sqlList = [];
    sqlList[0] = [
      "SELECT COUNT(*) AS tabCount FROM sqlite_master WHERE type='table' AND name='customerData';",
      tableExistCheck,
      masterErr,
    ];
    Sql(DB, sqlList);
  }
}

function createDB() {
  // checks if table "customerData" exists
  // if not, drops (just in case), re-creates, and fills the table with data
  var sqlList;
  if (nTables < 1) {
    NSB.MsgBox("Table customerData does not exist");
    sqlList = [];
    sqlList[0] = ["DROP TABLE IF EXISTS customerData;"];
    sqlList[1] = [
      "CREATE TABLE IF NOT EXISTS customerData('name', 'age', 'sales', PRIMARY KEY('name') );",
    ];
    for (j = 0; j <= databaseSize - 1; j++) {
      args = ["cust" + j, j, j * 10];
      sqlList[j + 2] = [
        "INSERT INTO customerData (name, age, sales) VALUES ( ?,?,?);",
        args,
      ];
    }
    // now execute to create the table
    Sql(DB, sqlList);
  } else {
    NSB.MsgBox(
      "DB with table customerData already exists with " +
        nTables +
        " Tables named " +
        '"' +
        "customerData" +
        '"' +
        " "
    );
  }
  // select the data for further processing
  sqlList = [];
  sqlList[0] = ["SELECT * FROM customerData ORDER BY name;", dataHandler];
  Sql(DB, sqlList);
}

function tableCount(transaction, results) {
  var rtc;
  var i, j;
  DBRecords = results;
  nTables = DBRecords.rows.length;
  txtMessage.value = "The database currently has " + nTables + " Tables";
  grMaster.rows = nTables + 1;
  if (nTables > 4) {
    nTables = 4;
  } // because of fixed grid size
  //remove old grid values
  for (i = 1; i <= 4; i++) {
    for (j = 0; j <= 4; j++) {
      grMaster.setValue(i, j, "");
    }
  }

  for (j = 0; j <= nTables - 1; j++) {
    i = j + 1;
    grMaster.setValue(i, 0, DBRecords.rows.item(j)["type"]);
    grMaster.setValue(i, 1, DBRecords.rows.item(j)["name"]);
    grMaster.setValue(i, 2, DBRecords.rows.item(j)["tbl_name"]);
    grMaster.setValue(i, 3, DBRecords.rows.item(j)["rootpage"]);
    grMaster.setValue(i, 4, DBRecords.rows.item(j)["sql"]);
  }
  nsbDOMAttr(form1, "style.display", "none");
  nsbDOMAttr(form2, "style.display", "block");
}

function tableExistCheck(transaction, results) {
  var rtc;
  NSB.MsgBox("tableExistCheck");
  DBRecords = results;
  nTables = DBRecords.rows.item(0)["tabCount"];
  txtMessage.value =
    "The database contains " + nTables + " tables with the name specified";
  rtc = createDB();
}

function masterErr(transaction, results) {
  // called in Case of Error
  NSB.MsgBox("Error: " + results.message);
  debugger;
}

function dataHandler(transaction, results) {
  // Called On completion of Sql command
  DBRecords = results;
  txtMessage.value =
    "Recs in DB created/read: " +
    DBRecords.rows.length +
    " in " +
    (SysInfo(10) - startTime) +
    " milliseconds.";
}

function skipError(transaction, results) {
  // Called On failure of Sql command
  NSB.MsgBox("skipError");
  NSB.MsgBox("results = " + results);
}

btnRead.onclick = function () {
  var sqlList;
  var i, j;
  for (i = 1; i <= 5; i++) {
    for (j = 0; j <= 3; j++) {
      Grid1.setValue(i, j, CStr(i) + ":" + CStr(j));
    }
  }
  sqlList = [];
  sqlList[0] = [
    "SELECT name, age, sales from customerData ORDER BY name;",
    [],
    resultToGrid,
  ];
  iGridStart = 1;
  iRec = 0;
  DBRecords = [];
  NSB.WaitCursor(true);
  Sql(DB, sqlList);
};

function resultToGrid(transaction, results) {
  console.log("result");
  // Called On completion of Sql command in Function btnRead_onclick
  DBRecords = results;
  NSB.WaitCursor(false);
  iRec = 0;
  btnShowNext.onclick();
}

btnShowNext.onclick = function () {
  var i, j;

  //Clear grid before reading Next group of records
  for (i = 1; i <= 5; i++) {
    for (j = 0; j <= 3; j++) {
      Grid1.setValue(i, j, "");
    }
  }
  //fill grid With Next group of 5 records
  for (i = 1; i <= 5; i++) {
    if (iRec < DBRecords.rows.length) {
      Grid1.setValue(i, 0, iRec);
      Grid1.setValue(i, 1, DBRecords.rows.item(iRec)["name"]);
      Grid1.setValue(i, 2, DBRecords.rows.item(iRec)["age"]);
      Grid1.setValue(i, 3, DBRecords.rows.item(iRec)["sales"]);
      iRec = iRec + 1;
    }
  }
};

btnTotalSales.onclick = function () {
  startTime = SysInfo(10);
  sqlList = [];
  sqlList[0] = [
    "SELECT SUM(sales) AS TotalSales, AVG(sales) AS AvgSales FROM customerData;",
    sumSales,
  ];
  Sql(DB, sqlList);
};

function sumSales(transaction, results) {
  //Called On completion of Sql command in Function btnTotalSales_onclick
  txtMessage.value =
    "Total Sales are " +
    results.rows.item(0)["TotalSales"] +
    " , Average: " +
    results.rows.item(0)["AvgSales"] +
    " in " +
    (SysInfo(10) - startTime) +
    " ms.";
}

btnDrop.onclick = function () {
  var sqlList;
  NSB.MsgBox("Table customerData will be dropped");
  sqlList = [];
  sqlList[0] = ["DROP TABLE customerData;", dropExec, dropError];
  Sql(DB, sqlList);
};

function dropExec(transaction, result) {
  DBRecords = [];
  NSB.MsgBox("Table customerData dropped");
}

function dropError() {
  NSB.MsgBox("error in drop statement");
}

btnOpen.onclick = function () {
  total = 0;
  DB = SqlOpenDatabase("customerdb.db", "1.0", "My Customer Database");
};
