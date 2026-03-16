 //Contributed by Erkan Kaplan

 //###########################################
 //              Rating EVENTS
 //##########################################
Rating1.onchange = function(event) {
 var curValue;
  curValue = event.value;
  Label1.textContent = "Rating Value: "  +  curValue;
};



 //#########################################
 //         Rating METHODS
 //#########################################
 //disable rating
Button1.onclick = function() {
  $("#Rating1").jqxRating({disabled:true});
};

 //enable rating
Button2.onclick = function() {
  $("#Rating1").jqxRating({disabled:false});
};

 //Set rating value 5*
Button3.onclick = function() {
  $("#Rating1").jqxRating({value:5});
};

 //Get rating value
Button4.onclick = function() {
 var curValue;
  curValue = $("#Rating1").jqxRating("value");
  NSB.MsgBox("Current Value is : "  +  curValue);
};




