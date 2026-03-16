//basic structure of program dealing With SQLite database
//concepts also demonstrated:
//save / retrieve program state (form that was open when program was closed)
//Contributed by Thomas Gruber
//
var DBIsOpen; // True/False, to avoid duplicate opening
var DBIsNew; // True/False; True means the DB is new, required tables do not exist yet

var currentForm; // form to return to
var currentRec; // DB table/record that was last displayed

DBIsOpen = false;
DBIsNew = true;

function Main() {
  if (localStorage.lastrun != "undefined") {
    NSB.MsgBox("this program was last run at " + localStorage.lastrun);
    localStorage.lastrun =
      localStorage.lastrun +
      "\n" +
      " re-opened on " +
      CDate(new Date()) +
      " at " +
      Time();
  }
}

//global functions For database handling
window.onunload = function () {
  localStorage.lastrun =
    "window_onunload triggered on " + CDate(new Date()) + " at " + Time();
};

function openDB(dbname) {
  var returnValue = "";
  //open database If it is not already open
  if (!DBIsOpen) {
    DB = SqlOpenDatabase(dbname, "1.0", dbname);
    if (DB != 0) {
      DBIsOpen = true;
      returnValue = true;
    } else {
      returnValue = false;
    }
  }
  return returnValue;
}
