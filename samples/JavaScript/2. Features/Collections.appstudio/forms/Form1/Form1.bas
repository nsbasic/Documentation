'Show how to do collections in NSB/AppStudio

Function Button1_onclick()
  
  Dim item1, item2, item3, item4
  item1="Knuth"
  item2="Babbage"
  item3="Kemeny"
  item4="Kurtz"

  'Create our collection
  myCollection = new Object()
  myCollection.add("Knuth", "firstKey")
  myCollection.add(item2, "secondKey")
  myCollection.add(item3, "thirdKey")
  myCollection.add(item4, "fourthKey")

  Print "After adding using myCollection.add(item, key):"
  For Each key, item in myCollection
    Print key, item
  Next

  'Delete a member
  myCollection.delete(item2)

  Print 
  Print "After deletion using myCollection.delete(item2):"
  For Each key, item in myCollection
    Print key, item
  Next

  Print 
  Print "Number of items in Collection:" & UBound(myCollection)+1
  
End Function
