 //Websocket sample. Websockets let you talk to a server using the
 //Websocket protocol. 
 //It's a more secure version of WinSock, but not the same thing.
 //For more info, see
 //http://websockets.org/echo.html
 //To download server code for VB Express 2012, go to
 //http://wiki.appstudio.dev/images/c/cf/WebSocketsEchoServer.VBExpress2012.zip
 //Also works on Visual Studio Express 2013


var ws;

function Main() {
  secureCB.onclick();
  secureCB.childNodes[1].children[1].disabled = true;
}

function onOpen(evt) {
  logToConsole("CONNECTED");
  setGuiConnected(true);
}

function onClose(evt) {
  logToConsole("DISCONNECTED");
  setGuiConnected(false);
}

function onMessage(evt) {
  logToConsole("RESPONSE: " + evt.data);
}

function onError(evt) {
  logToConsole("ERROR:" + evt.data);
}

secureCB.onclick = function() {
  if(secureCB.getValue(1) == true) {
    wsUri.value = "wss://echo.websocket.org";
 } else {
    wsUri.value = "ws://echo.websocket.org";
  }
};

connect.onclick = function() {
  console.log("clic");
  if(! WebSocket) {
    logToConsole("Error: This browser does not support WebSockets.");
    return;
 } else {
    logToConsole("This browser supports WebSockets.");
  }

  ws = new WebSocket(wsUri.value);
 //hook the websocket's events into the functions in this program
  ws.onopen = onOpen;
  ws.onclose = onClose;
  ws.onmessage = onMessage;
  ws.onerror = onError;
};

function logToConsole(message) {
  consoleLog.value = consoleLog.value  +  message  +  Chr(10);
}

disconnect.onclick = function() {
  ws.close();
};

clearLogBut.onclick = function() {
  consoleLog.value = "";
};

send.onclick = function() {
  logToConsole("SENT: "  +  sendMessage.value);
  ws.send(sendMessage.value);
};

function setGuiConnected(isConnected) {
  wsUri.disabled = isConnected;
  connect.disabled = isConnected;
  disconnect.disabled = ! isConnected;
  sendMessage.disabled = ! isConnected;
  send.disabled = ! isConnected;
  labelColor = "black";
  if(isConnected) {
    labelColor = "#999999";
  }
  secureCB.childNodes[1].children[0].style.color = labelColor;
  secureCB.childNodes[1].children[1].disabled = isConnected;
}
