function Main() {
    if (typeof(cordova) == "undefined") {
        NSB.MsgBox("This sample must be built with VoltBuilder It will only run on an iOS or Android device.");
    }
}

Button1.onclick = function() {
    options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    };

    navigator.camera.getPicture(onPictureReturned, onPictureError, options);
};

function onPictureReturned(ImageURI) {
    Image1.src = ImageURI;
}

function onPictureError(message) {
    NSB.MsgBox("Failed because " + message);
}