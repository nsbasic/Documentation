var  req, user, password, data, URL;
user="GW@ESW";
password="ESW4GW";
URL="http://gw.esworkplace.sap.com/sap/opu/sdata/sap/DEMO_BANK/z_demo_bankCollection";

function Main() {
 var  s, auth;
  $('#row0Grid1>div>span').text('')
  $('#Grid1').jqxGrid({ showdefaultloadelement: true}); 

  auth=encodeURIComponent("?sap-user="  +  user  +  "&sap-password="  +  password);
  s=URL  +  auth;
  req=Ajax("ajaxGetURL.php/?urlToGet="  +  s, "" , "" , displayResults);
}

function displayResults() {
  if(!req )  { return; }
  if(req.readyState!=4 )  { return; } //ignore progress reports

  if(req.status!=200) { //failure
    console.log("Error: "  +  req.err);
     return;
  }

  if(Left(req.responseText,5)!="<?xml") {
    console.log("XML not received"  +  req.responseText);
    debugger;
     return;
  }

 //conversion function from 
 //http://www.fyneworks.com/jquery/xml-to-json/#tab-Overview
  data=$.xml2json(req.responseText);
  
  for (i = 0; i < data.entry.length; i++) {
    $("#Grid1").jqxGrid("addrow",null,{
      "bankname": data.entry[i].content.properties.bank_name,
      "bankcity": data.entry[i].content.properties.city})
  }
  $('#Grid1>div>table').hide()
}
