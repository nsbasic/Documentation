function Main() {
  TextArea1.value="100,10,700,4,30";
}

Button1.onclick = function() {
  myArray=Split(TextArea1.value,",");
  for     (i = (0); i  <= Len(myArray) -1; i ++) {
    myArray[i] = _jsCint(myArray[i] );
  }

  NSB.Print((("orginal array: ")  +  (myArray)) + "<br>");
  NSB.Print((("sorted numerically: ")  +  (Sort(myArray))) + "<br>");
  NSB.Print((("sorted descending: ")  +  (Sort(myArray,"d"))) + "<br>");
  NSB.Print((("sorted alphabetically: ")  +  (Sort(myArray, mySort))) + "<br>");
};

function mySort(x,y) { var returnValue="";
  if((CStr(x)<CStr(y))) {
     returnValue =-1;
 } else {
     returnValue =1;
  }
return returnValue; }
