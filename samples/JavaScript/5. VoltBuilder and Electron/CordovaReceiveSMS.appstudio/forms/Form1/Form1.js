// Uses cordova-plugin-sms-receive  https;
//github.com/andreszs/cordova-plugin-sms-receive;
function Main() {
    if (typeof(cordova) == "undefined") {
        NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
    }
}

Button1.onclick = function() {
    SMSReceive.startWatch(startSuccess, startFail);
};

Button2.onclick = function() {
    SMSReceive.stopWatch(stopSuccess, stopFail);
};

function startSuccess() {
    Textarea1.value = "watching started.";
}

function startFail() {
    Textarea1.value = "watching start failed..";
}

function stopSuccess() {
    Textarea1.value = "watching stopped.";
}

function stopFail() {
    Textarea1.value = "watching stop failed.";
}

document.addEventListener("onSMSArrive", onSMSArrive);

function onSMSArrive(e) {
    IncomingSMS = e.data;

    Textarea1.value = "SMS Received" + '\n';
    Textarea1.value += "sms.address:" + IncomingSMS.address + '\n';
    Textarea1.value += "sms.body:" + IncomingSMS.body + '\n';
    Textarea1.value += JSON.stringify(IncomingSMS);
}