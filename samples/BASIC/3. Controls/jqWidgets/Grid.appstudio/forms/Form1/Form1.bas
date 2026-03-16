Dim data, source, dataAdapter

Sub Main()
  data = generatedata(50);
  source = {localdata: data, datatype: "array"};
  dataAdapter = new $.jqx.dataAdapter(source);
              
  NSB.jqxSettings["Grid1"].source = dataAdapter
  NSB.jqxSettings["Grid1"].columns = [ _
    { text: "First Name", dataField: "firstname", width: 100, cellsrenderer: color}, _
    { text: "Last Name", dataField: "lastname", width: 100, cellsrenderer: color}, _
    { text: "Product", dataField: "productname", width: 180, cellsrenderer: color}, _
    { text: "Quantity", dataField: "quantity", width: 80, cellsalign: "right", cellsrenderer: color}, _
    { text: "Unit Price", dataField: "price", width: 90, cellsalign: "right", cellsformat: "c2", cellsrenderer: color}, _
    { text: "Total", dataField: "total", cellsalign: "right", minwidth: 100, cellsformat: "c2", cellsrenderer: color} _
  ]
  $("#Grid1").jqxGrid(NSB.jqxSettings["Grid1"]);

End Sub

Function color(row, columnfield, value, defaulthtml, columnproperties)
  If row Mod 2 = 0  Then 
    color = "<span style='color:blue;'>" & value & "</span>"
  Else
    color = "<span>" & value & "</span>"
  End If
End Function

Function Grid1_gridready()
  console.log("Grid load complete")
End Function

Function Grid1_onrowselect(event)
   If event.args.rowindex<0 Then Exit Function
   data=$("#Grid1").jqxGrid("getrowdata",event.args.rowindex)
   s=data.name & vbCRLF & data.productname & vbCRLF & data.quantity & vbCRLF & data.price
   MsgBox s
End Function

Function btnSelectRow3_onclick()
   $("#Grid1").jqxGrid({selectedrowindex: 3})
End Function

Function btnAddRow_onclick()
  data={firstname: "Eric", _
        lastname: "Cartman", _
        name: "Eric Cartman", _
        productname: "Double Double", _
        quantity: 1, _
        price: 1.95, _
        total: 1.95, _
        }
  value=$("#Grid1").jqxGrid("addrow",null,data)
End Function


JavaScript
  function generatedata(rowscount, hasNullValues) {
    // prepare the data
    var data = new Array();
    if (rowscount == undefined) rowscount = 100;
    var firstNames =
    [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
    ];

    var lastNames =
    [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
    ];

    var productNames =
    [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
    ];

    var priceValues =
    [
         "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];

    for (var i = 0; i < rowscount; i++) {
        var row = {};
        var productindex = Math.floor(Math.random() * productNames.length);
        var price = parseFloat(priceValues[productindex]);
        var quantity = 1 + Math.round(Math.random() * 10);

        row["id"] = i;
        row["available"] = productindex % 2 == 0;
        if (hasNullValues == true) {
            if (productindex % 2 != 0) {
                var random = Math.floor(Math.random() * rowscount);
                row["available"] = i % random == 0 ? null : false;
            }
        }
        row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["name"] = row["firstname"] + " " + row["lastname"]; 
        row["productname"] = productNames[productindex];
        row["price"] = price;
        row["quantity"] = quantity;
        row["total"] = price * quantity;

        var date = new Date();
        date.setFullYear(2012, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
        date.setHours(0, 0, 0, 0);
        row["date"] = date;
       
        data[i] = row;
    }

    return data;
}
End JavaScript

