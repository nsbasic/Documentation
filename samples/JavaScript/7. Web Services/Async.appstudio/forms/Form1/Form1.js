function noop(res) {
    // this function doesn't do anything, but could...
}

async function getMyIP() {
    ip = await Ajax("http://api.ipify.org?format=json", noop);
    info = await Ajax("https://api.hackertarget.com/geoip/?q=" + ip.ip, noop);
    return info;
}

function showInfo() {
    NSB.MsgBox("Your info is " + info);
}

Button1.onclick = function() {
    getMyIP().then(showInfo);
};