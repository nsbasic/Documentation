 //This function shows how to do email, phone, Skype and SMS.
 //It brings up the Mail app with the fields filled in
 //The user can then hit send.
 //This sample works on devices, but not Chrome on the desktop.

txtEmail.value="support@appstudio.dev";
txtSubject.value="NSB/AppStudio";
txtBody.value="Wow, this is a great product. It's got amazing potential. I look forward to using it!";

butEmail.onclick = function() {
  email(txtEmail.value,txtSubject.value,txtBody.value);
};

butPhone.onclick = function() {
  phone(txtPhone.value);
};

butSkype.onclick = function() {
  skype(txtPhone.value);
};

function email(t, subject, body) {
  location.href="mailto:"  +  encodeURI(t)  +  "?subject="  +  encodeURI(subject)  +  "&body="  +  encodeURI(body);
}

function phone(tel) {
  location.href="tel:"  +  tel;
}

function skype(tel) {
  location.href="skype:"  +  tel;
}

function sms(tel, body) {
  if(InStr(navigator.appVersion, "iPhone")) {
    location.href="sms:"  +  tel  +  "&body="  +  encodeURI(body);
 } else {
    location.href="sms:"  +  tel  +  "?body="  +  encodeURI(body);
  }
}

butSMS.onclick = function() {
 //Needs iOS 4 or Android
 //sending body is not currently supported on iOS
 //phone cannot have spaces or punctuation
 //multiple phone numbers can be separated by commas
  sms(txtPhone.value,txtBody.value);
};
