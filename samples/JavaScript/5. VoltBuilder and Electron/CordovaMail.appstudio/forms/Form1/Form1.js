// this app will only run from VoltBuilder  See https;
//www.npmjs.com/package/cordova-plugin-email-composer  && http;
//html2canvas.hertzen.com/;
function Main() {
    if (typeof(cordova) == "undefined") {
        NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
    }
}

Button1.onclick = (() => {
    html2canvas(Form1).then(canvas => {
        cordova.plugins.email.open({
            to: 'gh@nsbasic.com',
            subject: 'Signed Agreement from Client',
            body: 'See attached.',
            attachments: 'base64:icon.png//' + canvas.toDataURL().substr(22),
        });
    });
});