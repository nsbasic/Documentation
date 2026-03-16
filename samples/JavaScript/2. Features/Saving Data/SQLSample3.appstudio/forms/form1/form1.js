var sqlList,
  strSQL,
  startTimeFill,
  endTimeFill,
  startTimePop,
  endTimePop,
  ordercount,
  itemcount;
var DB, DBRecords, DBOrderRecords, DBLineRecords, nRec, nOrders, nOrderLines;
var optionName, strResult, sum;

function Main() {
  ordercount = 5;
  itemcount = 4;
  strResult = "";
}

function FillDB() {
  // opens DB (created if not existing), drops existing tables, fills with data
  sqlList = [];
  sqlList[0] = ["DROP TABLE IF EXISTS tabOrders;"];
  sqlList[1] = ["DROP TABLE IF EXISTS tabOrderLines;"];
  sqlList[2] = [
    "CREATE TABLE IF NOT EXISTS tabOrders (orderno, customer, ordersum, PRIMARY KEY(orderno));",
  ];
  sqlList[3] = [
    "CREATE TABLE IF NOT EXISTS tabOrderLines (orderno, itemno, itemname, cost, PRIMARY KEY(orderno, itemno));",
  ];
  nRec = 4;
  for (j = 0; j <= ordercount - 1; j++) {
    args = [j, "customer" + Right("0000" + CStr(j), 5)];
    sqlList[nRec] = [
      "INSERT INTO tabOrders (orderno, customer) VALUES (?,?);",
      args,
    ];
    nRec = nRec + 1;
    for (k = 0; k <= itemcount - 1; k++) {
      args = [j, k, "item" + Right("00" + CStr(k), 3), 10 * j + k];
      sqlList[nRec] = [
        "INSERT INTO tabOrderLines(orderno,itemno,itemname,cost) VALUES (?,?,?,?);",
        args,
      ];
      nRec = nRec + 1;
    }
  }
  sqlList[nRec] = [
    "select count(*) as ordercount from tabOrders",
    sqlSuccess,
    sqlErr,
  ];
  sqlList[nRec + 1] = [
    "select count(*) as itemcount from tabOrderLines",
    sqlSuccess2,
    sqlErr,
  ];
  sqlList[nRec + 2] = [
    "select tabOrders.orderno, customer, itemno, itemname from tabOrders, tabOrderLines where tabOrderLines.orderno = tabOrders.orderno",
    sqlSuccess3,
    sqlErr,
  ];

  Sql(DB, sqlList);
}

function sqlSuccess(transaction, results) {
  DBRecords = results;
  nOrders = DBRecords.rows.item(0)["ordercount"];
  //  NSB.MsgBox (dummy,DBRecords.rows.item(0)["ordercount"] & " orders found")
}

function sqlSuccess2(transaction, results) {
  DBRecords = results;
  nOrderLines = DBRecords.rows.item(0)["itemcount"];
}

function sqlSuccess3(transaction, results) {
  DBRecords = results;
  strResult = nOrders + " Orders with " + nOrderLines + " items found" + "\n";
  for (i = 0; i <= DBRecords.rows.length - 1; i++) {
    strResult =
      strResult +
      DBRecords.rows.item(i)["orderno"] +
      "\t" +
      DBRecords.rows.item(i)["customer"] +
      "\t" +
      DBRecords.rows.item(i)["itemno"] +
      "\t" +
      DBRecords.rows.item(i)["itemname"];
  }
  NSB.MsgBox(Left(strResult, 200) + "...");
}

function sqlErr(transaction, results) {
  NSB.MsgBox("SQL error");
}

function ShowOrders() {
  // Processes orders and order items, calculates sum
  nRec = 0;
  strResult = "Orders with cost total" + "\n";
  sqlList = [];
  sqlList[0] = [
    "SELECT orderno, customer FROM tabOrders;",
    showOrderSuccess,
    sqlErr,
  ];
  Sql(DB, sqlList);
}

function showOrderSuccess(transaction, result) {
  DBOrderRecords = result;
  sqlList = [];
  for (iOrder = 0; iOrder <= DBOrderRecords.rows.length - 1; iOrder++) {
    nRec = nRec + 1;
    currentOrderNo = DBOrderRecords.rows.item(iOrder)["orderno"];
    sum = 0;
    args = [iOrder, currentOrderNo];
    sqlList[iOrder] = [
      "SELECT ? as iRec, itemno, itemname, cost FROM tabOrderLines WHERE orderno=? ORDER BY itemno DESC;",
      args,
      showItemSuccess,
    ];
  }
  Sql(DB, sqlList);
}

function showItemSuccess(transaction, result) {
  DBLineRecords = result;
  iOrder = DBLineRecords.rows.item(0)["iRec"];
  sum = 0;
  for (iLine = 0; iLine <= DBLineRecords.rows.length - 1; iLine++) {
    nRec = nRec + 1;
    sum = sum + DBLineRecords.rows.item(iLine)["cost"];
  }
  strResult =
    strResult +
    DBOrderRecords.rows.item(iOrder)["orderno"] +
    "\t" +
    DBOrderRecords.rows.item(iOrder)["customer"] +
    "\t" +
    sum +
    "\n";
}

btnOpen.onclick = function () {
  DB = SqlOpenDatabase("localStorage", "1.0", "SQLJoin DB");
  NSB.MsgBox("Database opened");
};

Button2.onclick = function () {
  ShowOrders();
  setTimeout(showResult, 1000);
};

function showResult() {
  NSB.MsgBox(strResult);
}

Button1.onclick = function () {
  FillDB();
};
