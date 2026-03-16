// this app will only run from VoltBuilder
// See https://www.npmjs.com/package/cordova-plugin-email-composer
// And http://html2canvas.hertzen.com/

Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub


JavaScript
Button1.onclick = (() => {
  html2canvas(Form1).then(canvas => {
    cordova.plugins.email.open({
      to:      'gh@nsbasic.com',
      subject: 'Signed Agreement from Client',
      body:    'See attached.',
      attachments: 'base64:icon.png//' + canvas.toDataURL().substr(22),
    });    
  });
});
End JavaScript
