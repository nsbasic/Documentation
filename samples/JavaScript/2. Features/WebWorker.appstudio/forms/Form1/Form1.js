 //Code inspired by Christian Probst
 //Needs to be deployed: cannot be run locally.

ww = new Worker( "WebWorker.js" );

ww.onmessage = function(e) {
  txwrkmsg.value = txwrkmsg.value + e.data + " thread ended after 3 secs" + '\n';
};

btRunWebWorker.onclick = function() {
  ww.postMessage("It works");
};
