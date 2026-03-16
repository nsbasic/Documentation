function showPartner(Partner) {
  Company.Caption=Partner.Company;
  CountryText.Caption="Location: "  +  Partner.Address.City  +  ","  +  Partner.Address.CountryText;
  CurrencyText.Caption="Currency: "  +  Partner.CurrencyText;
  WebAddress.Caption="Web: "  +  Partner.WebAddress;
  EmailAddress.Caption="Email: "  +  Partner.EmailAddress;
}

function formatTime(s) { var returnValue="";
   returnValue =Mid(s,3,2)  +  ":"  +  Mid(s,6,2)  +  " "  +  Mid(s,1,2);
return returnValue; }

Button1.onclick = function() {
  ChangeForm(frmOverview);
};