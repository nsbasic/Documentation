 //---- serverStorage ----

butClear.onclick = function() {
  serverStorage.clear(done);
};

butGetAllItems.onclick = function() {
  serverStorage.getAllItems(getAllItemsCallback);
};

butGetItem.onclick = function() {
  serverStorage.getItem("SimpleString" , getItemCallback);
};

butRemoveItem.onclick = function() {
  serverStorage.removeItem("SimpleString" , done);
};

butSetItem.onclick = function() {
  serverStorage.setItem("SimpleString" , "ABCD" , done);
  serverStorage.setItem("Number" , 123, done);
  serverStorage.setItem("Array" , [1, 2, 3, 4], done);
  serverStorage.setItem("Object" , {firstName: "Eric" , lastName: "Cartman"}, done);
};

function done(error, data) {
  if(error) {
    if(data == undefined ) { data = {message: "Network Error"}; }
    NSB.MsgBox(data.message);
 } else {
    console.log("success");
  }
}

function getAllItemsCallback(error, data) {
  if(error) {
    if(data == undefined ) { data = {message: "Network Error"}; }
    NSB.MsgBox(data.message);
 } else {
    NSB.Print((false) + "<br>");
    for (key in data) {
      console.log(key, data[key]);
      k = [key, key][0];
      NSB.Print(((k)  +  (": ")  +  (data[key].toString())) + "<br>");
    }
    }
}

function getItemCallback(error, data) {
  if(error) {
    if(data == undefined ) { data = {message: "Network Error"}; }
    NSB.MsgBox(data.message);
 } else {
    NSB.MsgBox(data);
  }
}

 //---- appStorage ----
butClearApp.onclick = function() {
   appStorage.clear(NSB.voltAppId, done);
};

butGetAllItemsApp.onclick = function() {
  appStorage.getAllItems(NSB.voltAppId, getAllItemsCallback);
};

butGetItemApp.onclick = function() {
  appStorage.getItem("SimpleString" , NSB.voltAppId, getItemCallback);
};

butRemoveItemApp.onclick = function() {
 appStorage.removeItem("SimpleString" , NSB.voltAppId, done);
};

butSetItemApp.onclick = function() {
  appStorage.setItem("SimpleString" , "ABCD" , NSB.voltAppId, done);
  appStorage.setItem("Number" , 123, NSB.voltAppId, done);
  appStorage.setItem("Array" , [1, 2, 3, 4], NSB.voltAppId, done);
  appStorage.setItem("Object" , {firstName: "Eric" , lastName: "Cartman"}, NSB.voltAppId, done);
};


function enableButtons() {
     butClear.disabled = false;
     butGetAllItems.disabled = false;
     butGetItem.disabled = false;
     butRemoveItem.disabled = false;
     butSetItem.disabled = false;
     butGetAllItemsApp.disabled = false;
     butGetItemApp.disabled = false;

 //Buttons which are only available to owner when voltDashBoard access is on.
     if(NSB.voltDashboardAccess) {
         butClearApp.disabled = false;
         butRemoveItemApp.disabled = false;
         butSetItemApp.disabled = false;
     }
}

 function disableButtons() {
   return;
     butClear.disabled = true;
     butGetAllItems.disabled = true;
     butGetItem.disabled = true;
     butRemoveItem.disabled = true;
     butSetItem.disabled = true;
     butGetAllItemsApp.disabled = true;
     butGetItemApp.disabled = true;
     butClearApp.disabled = true;
     butRemoveItemApp.disabled = true;
     butSetItemApp.disabled = true;
}