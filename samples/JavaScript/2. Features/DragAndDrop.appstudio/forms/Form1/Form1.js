function Main() {
 //This will work for any control. We're using a Label here.
  Label1.setAttribute("draggable" , "true");
}

Form1.ondragover = function(e) {
 //Tell the form not to handle dragover the usual way.
  e.preventDefault();
};

Label1.ondragstart = function(e) {
 //Get the position where were start dragging
  Label1.dragStart = {x: e.x, y: e.y};
};

Form1.ondrop = function(e) {
 //Reposition the control by the amount of the change
  Label1.Left = Label1.Left - (Label1.dragStart.x - e.x);
  Label1.Top = Label1.Top - (Label1.dragStart.y - e.y);
};Form1.ondrop =Form1.ondrop;