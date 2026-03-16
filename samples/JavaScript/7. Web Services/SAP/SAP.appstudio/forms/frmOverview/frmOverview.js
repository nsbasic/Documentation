var req,user,password,data,URL;
user="P1768496152";
password="george";
URL="https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/BusinessPartnerCollection";

function Main() {
 var s,auth;
  auth=encodeURIComponent("?sap-user="  +  user  +  "&sap-password="  +  password);
  s=URL  +  auth;
  req=Ajax("ajaxGetURL.php/?urlToGet="  +  s, "" , "" , displayResults);
  console.log("Ajax request sent...");
}

function displayResults() {
  if(!req )  { return; }
  if(req.readyState!=4) {
    console.log("readyState is "  +  req.readyState);
    return; //ignore progress reports
  }

  if(req.status!=200) { //failure
    console.log("Error: "  +  req.err);
    return;
  }

  imgWait.hide();
  if(Left(req.responseText,5)!="<?xml") {
    console.log("XML not received"  +  req.responseText);
    return;
  }

 //conversion function from 
 //http://www.fyneworks.com/jquery/xml-to-json/#tab-Overview
  data=$.xml2json(req.responseText);
  fillList();
}

function fillList() {
 var partner;
  lstPartner.deleteItem("all");
  for     (i=(0); i <= UBound(data.entry); i++) {
    partner=data.entry[i];
    lstPartner.addItem(partner.title);
  }
}

lstPartner.onclick = function(i) {
  if(TypeName(i)=="object" )  { return; };
  ChangeForm(frmDetail);
  showPartner(data.entry[i].content.properties);
};



