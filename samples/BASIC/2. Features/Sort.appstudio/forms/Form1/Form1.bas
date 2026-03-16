Sub Main()
  TextArea1.value="100,10,700,4,30"
End Sub

Function Button1_onclick()
  myArray=Split(TextArea1.value,",")
  For i = 0 To Len(myArray) -1
    myArray[i] = CInt(myArray[i])
  Next
  
  Print "orginal array: " & myArray
  Print "sorted numerically: " & Sort(myArray)
  Print "sorted descending: " & Sort(myArray,"d")
  Print "sorted alphabetically: " & Sort(myArray, mySort)
End Function

Function mySort(x,y)
  If (CStr(x)<CStr(y)) Then
    mySort=-1
  Else
    mySort=1
  End If
End Function
