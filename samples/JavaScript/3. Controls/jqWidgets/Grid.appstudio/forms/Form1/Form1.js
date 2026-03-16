var data,source,dataAdapter;

function Main() {
  data = generatedata(50);
  source = {localdata: data, datatype: "array"};
  dataAdapter = new $.jqx.dataAdapter(source);

  NSB.jqxSettings["Grid1"].source = dataAdapter;
  NSB.jqxSettings["Grid1"].columns = [  { text: "First Name" , dataField: "firstname" , width: 100, cellsrenderer: color},  { text: "Last Name" , dataField: "lastname" , width: 100, cellsrenderer: color},  { text: "Product" , dataField: "productname" , width: 180, cellsrenderer: color},  { text: "Quantity" , dataField: "quantity" , width: 80, cellsalign: "right" , cellsrenderer: color},  { text: "Unit Price" , dataField: "price" , width: 90, cellsalign: "right" , cellsformat: "c2" , cellsrenderer: color},  { text: "Total" , dataField: "total" , cellsalign: "right" , minwidth: 100, cellsformat: "c2" , cellsrenderer: color}  ];
  $("#Grid1").jqxGrid(NSB.jqxSettings["Grid1"]);

}

function color(row, columnfield, value, defaulthtml, columnproperties) { var returnValue="";
  if(row % 2 == 0 ) {
     returnValue  = "<span style='color:blue;'>"  +  value  +  "</span>";
 } else {
     returnValue  = "<span>"  +  value  +  "</span>";
  }
return returnValue; }

function Grid1_gridready() {
  console.log("Grid load complete");
}

Grid1.onrowselect = function(event) {
   if(event.args.rowindex<0 )  { return; };
   data=$("#Grid1").jqxGrid("getrowdata" ,event.args.rowindex);
   s=data.name  +  '\n'  +  data.productname  +  '\n'  +  data.quantity  +  '\n'  +  data.price;
   NSB.MsgBox(s);
};

btnSelectRow3.onclick = function() {
   $("#Grid1").jqxGrid({selectedrowindex: 3});
};

btnAddRow.onclick = function() {
  data={firstname: "Eric" ,  lastname: "Cartman" ,  name: "Eric Cartman" ,  productname: "Double Double" ,  quantity: 1,  price: 1.95,  total: 1.95,  };
  value=$("#Grid1").jqxGrid("addrow" ,null,data);
};

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
