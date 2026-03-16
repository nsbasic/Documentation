function Main() {
    if (typeof(cordova) == "undefined") {
        NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
    }
}

btnSend.onclick = function() {
    var socketID;
    sendTo(txtData.value, txtAddress.value, Number(txtPort.value));
    setTimeout("sendTimeout(" + socketID + ")", 3000); // 3 seconds
};

function receiveErrorListener(info) {
    msg("RecvError on socket: " + info.socketId);
    chrome.sockets.udp.close(info.socketId);
}

function receiveListener(info) {
    msg("Recv from socket: " + arrayBufferToString(info.data));
    chrome.sockets.udp.close(info.socketId);
}

function sendTimeout(socketID) {
    chrome.sockets.udp.close(socketID);
}

function msg(s) {
    console.log(s);
    TextArea1.text = s + '\n' + TextArea1.text;
}