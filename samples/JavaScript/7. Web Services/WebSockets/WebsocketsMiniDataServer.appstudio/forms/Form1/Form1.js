 //Server Data Send / Receive code
 //Robert Borsuk
 //rborsuk@colourfull.com
 //2/16/14 updated by George Henne
 //On the server side, you need to be running the minidataserver,
 //written in Visual Studio 2010/C#.
 //minidataserver can be downloaded from 
 //http://wiki.appstudio.dev/images/e/e9/Minidataserver.zip

var serverAddress;
var serverPort;

 //set for where your data server is
serverAddress="http://localhost";
 //set for where your data server port is
serverPort="85";

function ReceiveData(data) {
  receiveText.value=decodeURIComponent(data);
}

function SendData(dataToSend) {
  url = serverAddress + ":" + serverPort + "?jsoncallback=?";
  req = GetJSON(url, {theData: encodeURIComponent(dataToSend)});
}

dataButton.onclick = function() {
 var myData;
  myData=sendText.value;
  SendData(myData);
};
