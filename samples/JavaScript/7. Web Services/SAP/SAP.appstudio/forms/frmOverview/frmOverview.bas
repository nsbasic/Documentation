Dim req, user, password, data, URL
user="P1768496152"
password="george"
URL="https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/BusinessPartnerCollection"

Sub Main()
  Dim s, auth
  auth=encodeURIComponent("?sap-user=" & user & "&sap-password=" & password)
  s=URL & auth
  req=Ajax("ajaxGetURL.php/?urlToGet=" & s, "", "", displayResults)
  console.log("Ajax request sent...")
End Sub

function displayResults()
  if !req Then Exit function
  if req.readyState<>4 Then 
    console.log("readyState is " & req.readyState)
    Exit function 'ignore progress reports
  End if
  
  if req.status<>200 Then 'failure
    console.log("Error: " & req.err)
    Exit function
  End if
  
  imgWait.hide()
  if Left(req.responseText,5)<>"<?xml" Then
    console.log("XML not received" & req.responseText)
    Exit function
  End if
  
  'conversion function from 
  'http://www.fyneworks.com/jquery/xml-to-json/#tab-Overview
  data=$.xml2json(req.responseText)
  fillList()
End function

function fillList()
  Dim partner
  lstPartner.deleteItem("all")
  for i=0 To UBound(data.entry)
    partner=data.entry[i]
    lstPartner.addItem(partner.title)
  Next
End function

function lstPartner_onclick(i)
  if TypeName(i)="object" Then Exit function
  ChangeForm(frmDetail)
  showPartner(data.entry[i].content.properties)    
End function
  


