'Contributed by Erkan Kaplan

Rem ###########################################
Rem               Rating EVENTS
Rem ##########################################
Function Rating1_onchange(event)
  Dim curValue
  curValue = event.value
  Label1.textContent = "Rating Value: " & curValue 
End Function



Rem #########################################
Rem          Rating METHODS
Rem #########################################
Rem disable rating
Function Button1_onclick()
  $("#Rating1").jqxRating({disabled:True})
End Function

Rem enable rating
Function Button2_onclick()
  $("#Rating1").jqxRating({disabled:False})
End Function

Rem Set rating value 5*
Function Button3_onclick()
  $("#Rating1").jqxRating({value:5})
End Function

Rem Get rating value
Function Button4_onclick()
  Dim curValue
  curValue = $("#Rating1").jqxRating("value")
  MsgBox "Current Value is : " & curValue 
End Function




