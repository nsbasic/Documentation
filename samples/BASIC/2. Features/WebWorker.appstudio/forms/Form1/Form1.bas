'Code inspired by Christian Probst
'Needs to be deployed: cannot be run locally.

ww = new Worker( "WebWorker.js" )
  
Function ww_onmessage(e)
  txwrkmsg.value = txwrkmsg.value + e.data + " thread ended after 3 secs" + vbCRLF
End Function

Function btRunWebWorker_onclick()
  ww.postMessage("It works")
End Function
