var audio;
file = "/android_asset/www/Super.wav";

function Main() {
    console.log(Media);
    audio = new Media(file, mediaSuccess, mediaError, mediaStatus);

    if (typeof(cordova) == "undefined") {
        NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
    }
}

function mediaSuccess() {
    TextBox1.value = "Success";
}

function mediaError(err) {
    TextBox1.value = "Error:" + err;
}

function mediaStatus(err) {
    var s;
    s = ["None", "Starting", "Running", "Paused", "Stopped"];
    TextBox1.value = "Status:" + s[err];
}

Button1.onclick = function() {
    TextBox1.value = "Playing...";
    audio.play();
};