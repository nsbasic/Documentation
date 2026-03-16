 // Important: See the documentation in http:wiki.appstudio.dev/Google_Drive_API
 // Read and update a Google Drive Sheet.
 // http://blog.appstudio.dev/?p=2781
 // http://wiki.appstudio.dev/Google_Drive_API

GoogleDrive.CLIENT_ID = "229059222211-hqr13ohhb9ddi57m0iojb58cb2n8m798.apps.googleusercontent.com";

var FILE_ID = "1jvuTjmirLatrD3_Lf6BsGP_IB_5iHW4G1rdn5IdIa9Q";
var spreadsheet = [[0]]; //The current spreadsheet in a 2D array

function Main() {
  GoogleDrive.checkAuth(authCallback);
}

 //Initiate auth flow
btnAuthorize.onclick = function() {
  GoogleDrive.authorize(authCallback);
};

function authCallback(auth) {
  btnAuthorize.disabled = ! auth;
}

btnList.onclick = function() {
  GoogleDrive.listFiles(listFilesCallback);
};

function listFilesCallback(files) {
  console.table(files);
  Grid1.setValue(0, 0, "Filename");
  Grid1.setValue(0, 1, "File_Id");
  Grid1.deleteRows(Grid1.getRowCount());
  Grid1.addRows(files.length);
  for     (i = (0); i  <= files.length-1; i ++) {
    Grid1.setValue(i + 1, 0, files[i].name);
    Grid1.setValue(i + 1, 1, files[i].id);
  }
  Grid1.refresh();
}

btnGet.onclick = function() {
  GoogleDrive.getSpreadsheet(FILE_ID, getSpreadsheetCallback);
};

function getSpreadsheetCallback(results) {
  spreadsheet = results;
  console.table(results);
  Grid1.setValue(0, 0, "A");
  Grid1.setValue(0, 1, "B");
  Grid1.deleteRows(Grid1.getRowCount());
  Grid1.addRows(results.length);
  for     (i = (0); i  <= results.length-1; i ++) {
    Grid1.setValue(i + 1, 0, results[i][0]);
    Grid1.setValue(i + 1, 1, results[i][1]);
  }
  Grid1.refresh();
}

btnSave.onclick = function() {
  spreadsheet[0][0] = spreadsheet[0][0] + "+";
  Grid1.setValue(1, 0, spreadsheet[0][0]);
  GoogleDrive.saveSpreadsheet(spreadsheet, FILE_ID, saveSpreadsheetCallback);
};

function saveSpreadsheetCallback() {
  NSB.MsgBox("done");
}

btnFileInfo.onclick = function() {
  GoogleDrive.getFileInfo(FILE_ID, getFileInfoCallback);
};

function getFileInfoCallback(info) {
  console.log(info);
  Grid1.deleteRows(Grid1.getRowCount());
  Grid1.setValue(0, 0, "Field");
  Grid1.setValue(0, 1, "Value");
  getFileInfoAddRow(info, "name");
  getFileInfoAddRow(info, "id");
  getFileInfoAddRow(info.lastModifyingUser, "displayName");
  getFileInfoAddRow(info.lastModifyingUser, "emailAddress");
  getFileInfoAddRow(info, "modifiedTime");
  getFileInfoAddRow(info, "kind");
  Grid1.refresh();
}

function getFileInfoAddRow(info, field) {
  var i = Grid1.getRowCount();
  Grid1.addRows(1);
  Grid1.setValue(i, 0, field);
  Grid1.setValue(i, 1, info[field]);
}

