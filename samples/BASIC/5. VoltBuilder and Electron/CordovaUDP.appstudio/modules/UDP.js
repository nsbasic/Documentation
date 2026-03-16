// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Original code and docs are here:
//https://github.com/MobileChromeApps/cordova-plugin-chrome-apps-sockets-udp

function sendTo(data, addr, port) {
    data = stringToArrayBuffer(data);
    var socketID
    if (chrome.sockets.udp.onReceive.listeners.length == 0) addReceiveListeners();      
    chrome.sockets.udp.create(function(createInfo) {
        chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', 0, function(result) {
            chrome.sockets.udp.send(createInfo.socketId, data, addr, port, function(result) {
                if (result < 0) {
                    msg('send fail: ' + result);
                } else {
                    msg('sendTo: success ' + port);
                };
                socketID = createInfo.socketID;
            });
        });
    });
    return socketID;
}

/*
function receiveErrorListener(info) {
    msg('RecvError on socket: ' + info.socketId);
    chrome.sockets.udp.close(info.socketId);
}

function receiveListener(info) {
    msg('Recv from socket: ');
    msg(info);
    chrome.sockets.udp.close(info.socketId);
}
*/

function addReceiveListeners() {
    chrome.sockets.udp.onReceiveError.addListener(receiveErrorListener);
    chrome.sockets.udp.onReceive.addListener(receiveListener);
    msg('receive listeners added');
}

function removeReceiveListeners() {
    chrome.sockets.udp.onReceiveError.removeListener(receiveErrorListener);
    chrome.sockets.udp.onReceive.removeListener(receiveListener);
    msg('receive listeners removed');
}

function bindRecvFromSendTo(data) {
    chrome.sockets.udp.create(function(createInfo) {
        chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', 0, function(result) {
            chrome.sockets.udp.getInfo(createInfo.socketId, function(socketInfo) {
                sendTo(data, socketInfo.localAddress, socketInfo.localPort);
            });
        });
    });
}

function bindRecvFromSendToWithBufferSize(data, bufferSize) {
    chrome.sockets.udp.create({
        bufferSize: bufferSize
    }, function(createInfo) {
        chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', 0, function(result) {
            chrome.sockets.udp.getInfo(createInfo.socketId, function(socketInfo) {
                sendTo(data, socketInfo.localAddress, socketInfo.localPort);
            });
        });
    });
}

function pauseBindRecvFromSendTo(data) {
    chrome.sockets.udp.create(function(createInfo) {
        chrome.sockets.udp.setPaused(createInfo.socketId, true, function() {
            chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', 0, function(result) {
                chrome.sockets.udp.getInfo(createInfo.socketId, function(socketInfo) {
                    sendTo(data, socketInfo.localAddress, socketInfo.localPort);
                });
            });
        });
    });
}

function bindPauseRecvFromSendTo(data) {
    chrome.sockets.udp.create(function(createInfo) {
        chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', 0, function(result) {
            chrome.sockets.udp.setPaused(createInfo.socketId, true, function() {
                chrome.sockets.udp.getInfo(createInfo.socketId, function(socketInfo) {
                    sendTo(data, socketInfo.localAddress, socketInfo.localPort);
                });
            });
        });
    });
}

function stringToArrayBuffer(string) {
    var buf = new ArrayBuffer(string.length);
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = string.length; i < strLen; i++) {
        bufView[i] = string.charCodeAt(i);
    }
    return buf;
}

function arrayBufferToString(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}


function joinMulticastGroup(address, port, loopback) {
    chrome.sockets.udp.create(function(socket) {
        var socketId = socket.socketId;
        msg(socket);
        chrome.sockets.udp.setMulticastTimeToLive(socketId, 12, function(result) {
            if (result != 0) {
                msg("Set TTL Error: " + result);
            }
            chrome.sockets.udp.setMulticastLoopbackMode(socketId, loopback, function(result) {
                if (result != 0) {
                    msg("Set Multicast LoopbackMode" + result);
                }
                chrome.sockets.udp.bind(socketId, "0.0.0.0", port, function(result) {
                    if (result != 0) {
                        chrome.sockets.udp.close(socketId);
                        msg("Error on bind(): " + result);
                    } else {
                        chrome.sockets.udp.joinGroup(socketId, address, function(result) {
                            if (result != 0) {
                                chrome.sockets.udp.close(socketId);
                                msg("Error on joinGroup(): " + result);
                            } else {
                                message = stringToArrayBuffer(socketId + ' Joined Group');
                                chrome.sockets.udp.send(socketId, message, address, port, function(result) {
                                    if (result < 0) {
                                        msg('send fail: ' + result);
                                    } else {
                                        msg('group sendTo: success');
                                    }
                                });
                            }
                        });
                    }
                });
            });
        });
    });
}

function getSockets() {
    chrome.sockets.udp.getSockets(function(socketsInfo) {
        if (!socketsInfo) return;
        for (var i = 0; i < socketsInfo.length; i++) {
            msg(socketsInfo[i]);
        }
    });
}

function updateSocket() {
    chrome.sockets.udp.create({}, function(createInfo) {
        updatedProperties = {
            persistent: true,
            name: 'testUpdate',
            bufferSize: 2048
        };
        chrome.sockets.udp.update(createInfo.socketId, updatedProperties);

        chrome.sockets.udp.getInfo(createInfo.socketId, function(socketInfo) {
            msg(socketInfo);
        });
    });
}

function setPaused() {
    chrome.sockets.udp.create({}, function(createInfo) {
        chrome.sockets.udp.setPaused(createInfo.socketId, true);
        chrome.sockets.udp.getInfo(createInfo.socketId, function(socketInfo) {
            msg(socketInfo);
        });
    });
}

function closeSockets() {
    chrome.sockets.udp.getSockets(function(socketsInfo) {
        if (!socketsInfo) return;
        for (var i = 0; i < socketsInfo.length; i++) {
            msg('closing socket: ' + socketsInfo[i].socketId);
            chrome.sockets.udp.close(socketsInfo[i].socketId);
        }
    });
}

function sendBroadcast(data) {
    var port = 1667;
    chrome.sockets.udp.create(function(createInfo) {
        chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', port, function(result) {
            chrome.sockets.udp.send(createInfo.socketId, data, '255.255.255.255', port, function(result) {
                if (result < 0) {
                    msg('send fail: ' + result);
                    chrome.sockets.udp.close(createInfo.socketId);
                } else {
                    msg('sendTo: success ' + port);
                    chrome.sockets.udp.close(createInfo.socketId);
                }
            });
        });
    });
}

function initPage() {

    var defaultAddr = '127.0.0.1';
    var defaultPort = 12345;
    var multicastAddr = '224.0.0.1';

    var arr = new Uint8Array(256);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = i;
    }

    addButton('send', function() {
        sendTo(arr.buffer, defaultAddr, defaultPort);
    });

    addButton('add receive listeners', function() {
        addReceiveListeners();
    });

    addButton('remove receive listeners', function() {
        removeReceiveListeners();
    });

    addButton('send to a bind socket', function() {
        bindRecvFromSendTo(arr.buffer);
    });

    addButton('send to a tiny buffer bind socket', function() {
        bindRecvFromSendToWithBufferSize(arr.buffer, 8);
    });

    addButton('send to a extra large buffer bind socket', function() {
        bindRecvFromSendToWithBufferSize(arr.buffer, 1048576);
    });

    addButton('get sockets', function() {
        getSockets();
    });

    addButton('update socket', function() {
        updateSocket();
    });

    addButton('set paused', function() {
        setPaused();
    });

    addButton('send to a paused socket', function() {
        pauseBindRecvFromSendTo(arr.buffer);
        bindPauseRecvFromSendTo(arr.buffer);
    });

    addButton('send broadcast message', function() {
        sendBroadcast(arr.buffer);
    });

    addButton('close sockets', function() {
        closeSockets();
    });

    addButton('Join multicast group', function() {
        joinMulticastGroup(multicastAddr, defaultPort, false);
    });

    addButton('Join multicast group with loopback', function() {
        joinMulticastGroup(multicastAddr, defaultPort, true);
    });
};

buttonCount = 0;
//initPage();  //uncomment this to add additional test buttons

function addButton(title, func) {
        var element = document.createElement("button");
        element.id = "Button" + buttonCount;
        element.style.position = "relative";
        element.style.width = "auto";
        element.style.float = "left";
        if (title == 'send') element.style.clear = "left";
        element.innerHTML = title;
        element.onclick = func;
        Form1.appendChild(element);
        buttonCount++
    }
  