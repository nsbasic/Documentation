Dim sqlList, strSQL, startTimeFill, endTimeFill, startTimePop, endTimePop, ordercount, itemcount
Dim DB, DBRecords, DBOrderRecords, DBLineRecords, nRec, nOrders, nOrderLines
Dim optionName, strResult, sum

Function Main()
  ordercount = 5
  itemcount = 4
  strResult = ""
End Function

Function FillDB()
' opens DB (created if not existing), drops existing tables, fills with data
  sqlList = []
  sqlList[0]=["DROP TABLE IF EXISTS tabOrders;"]
  sqlList[1]=["DROP TABLE IF EXISTS tabOrderLines;"]  
  sqlList[2]=["CREATE TABLE IF NOT EXISTS " & "tabOrders (orderno, customer, ordersum, PRIMARY KEY(orderno));"]
  sqlList[3]=["CREATE TABLE IF NOT EXISTS " & "tabOrderLines (orderno, itemno, itemname, cost, PRIMARY KEY(orderno, itemno));"]
  nRec = 4
  For j = 0 To ordercount-1
    args = [j, "customer" & Right("0000"&CStr(j),5)]
    sqlList[nRec]=["INSERT INTO tabOrders (orderno, customer) VALUES (?,?);", args]
     nRec = nRec + 1
     For k=0 To itemcount-1
       args = [j , k , "item" & Right("00" & CStr(k),3), 10*j+k]
       sqlList[nRec] = ["INSERT INTO tabOrderLines(orderno,itemno,itemname,cost) VALUES (?,?,?,?);", args]
       nRec = nRec + 1
     Next
  Next
  sqlList[nRec] = ["select count(*) as ordercount from tabOrders", sqlSuccess, sqlErr]
  sqlList[nRec+1] = ["select count(*) as itemcount from tabOrderLines",sqlSuccess2, sqlErr]
  sqlList[nRec+2] = ["select tabOrders.orderno, customer, itemno, itemname from tabOrders, tabOrderLines " & _
                      "where tabOrderLines.orderno = tabOrders.orderno",sqlSuccess3,sqlErr]

  Sql(DB,sqlList)
End Function

Function sqlSuccess(transaction,results)
  DBRecords = results
  nOrders = DBRecords.rows.item(0)["ordercount"]
'  NSB.MsgBox (dummy,DBRecords.rows.item(0)["ordercount"] & " orders found")
End Function

Function sqlSuccess2(transaction,results)
  DBRecords = results
  nOrderLines = DBRecords.rows.item(0)["itemcount"]
End Function

Function sqlSuccess3(transaction,results)
  DBRecords = results
  strResult = nOrders & " Orders with " & nOrderLines & " items found" & vbCRLF
  For i=0 To DBRecords.rows.length - 1
    strResult =  strResult & _
    DBRecords.rows.item(i)["orderno"] & vbTab & _
    DBRecords.rows.item(i)["customer"]  & vbTab & _
    DBRecords.rows.item(i)["itemno"]  & vbTab & _
    DBRecords.rows.item(i)["itemname"]
  Next
  NSB.MsgBox Left(strResult, 200) & "..."
End Function

Function sqlErr(transaction,results)
  MsgBox "SQL error"
End Function

Function ShowOrders()
' Processes orders and order items, calculates sum
  nRec = 0
  strResult = "Orders with cost total" & vbCRLF
  sqlList = []
  sqlList[0]=["SELECT orderno, customer FROM tabOrders;",showOrderSuccess, sqlErr]
  Sql(DB,sqlList)
End Function

Function showOrderSuccess(transaction, result)
  DBOrderRecords = result
  sqlList = []
  For iOrder=0 To DBOrderRecords.rows.length - 1
    nRec = nRec + 1
    currentOrderNo = DBOrderRecords.rows.item(iOrder)["orderno"]
    sum = 0
    args = [iOrder, currentOrderNo]
    sqlList[iOrder]=["SELECT ? as iRec, itemno, itemname, cost FROM tabOrderLines WHERE orderno=? ORDER BY itemno DESC;", args, showItemSuccess]
  Next
  Sql(DB,sqlList)
End Function

Function showItemSuccess(transaction,result)
  DBLineRecords = result
  iOrder = DBLineRecords.rows.item(0)["iRec"]
  sum = 0
  For iLine=0 To DBLineRecords.rows.length - 1
    nRec = nRec + 1
    sum = sum + DBLineRecords.rows.item(iLine)["cost"]
  Next
  strResult = strResult & _
  DBOrderRecords.rows.item(iOrder)["orderno"] & vbTab & _
  DBOrderRecords.rows.item(iOrder)["customer"]  & vbTab & _
  sum & vbCRLF
End Function

Function btnOpen_onclick()
  DB = SqlOpenDatabase("localStorage","1.0","SQLJoin DB")
  NSB.MsgBox "Database opened"
End Function

Function Button2_onclick()
  ShowOrders
  SetTimeout(showResult,1000)
End Function

Function showResult()
  NSB.MsgBox strResult
End Function

Function Button1_onclick()
  FillDB
End Function

