 //Show how to do collections in NSB/AppStudio

Button1.onclick = function() {

 var item1,item2,item3,item4;
  item1="Knuth";
  item2="Babbage";
  item3="Kemeny";
  item4="Kurtz";

 //Create our collection
  myCollection = new Object();
  myCollection["Knuth"]= "firstKey";
  myCollection[item2]= "secondKey";
  myCollection[item3]= "thirdKey";
  myCollection[item4]= "fourthKey";

  NSB.Print(("After adding using myCollection.add(item, key):") + "<br>");
  for (item in myCollection) {
    NSB.Print((item+ " " + myCollection[item]) + "<br>");
  }

 //Delete a member
  delete myCollection[item2];

  NSB.Print("<br>");
  NSB.Print(("After deletion using myCollection.delete(item2):") + "<br>");
  for (item in myCollection) {
    NSB.Print((item+ " " + myCollection[item]) + "<br>");
  }

  NSB.Print("<br>");
  NSB.Print((("Number of items in Collection:")  +  (UBound(myCollection)+1)) + "<br>");

};
