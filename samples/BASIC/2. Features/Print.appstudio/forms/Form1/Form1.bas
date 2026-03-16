Function Button1_onclick()
  Print Now
End Function

Function Button2_onclick()
  Dim top1, left1, s

  NSB.Print(False) 'clear existing content
  s = "Hello World!"
  s = s & "<br><img src=includes/mario.jpg>"
  Print s

  Rem Change text style in Print
  NSB_text.style.fontSize="20px"
  NSB_text.style.color="red"

  Rem Resize it
  top1 = (window.innerHeight/2)-150
  left1 = (window.innerWidth/2)-150
  NSB_Progress.style.top = top1 + "px"
  NSB_Progress.style.left = left1 + "px"
  NSB_Progress.style.height="250px"
  NSB_Progress.style.width="175px"

  Rem Gradient Backcolor:
  NSB_Progress.style.background="-webkit-gradient(left top, right top, color-stop(0%, rgba(76,76,76,1)), color-stop(12%, rgba(89,89,89,0.96)), color-stop(18%, rgba(98,98,98,0.94)), color-stop(21%, rgba(102,102,102,0.94)), color-stop(32%, rgba(71,71,71,0.94)), color-stop(42%, rgba(44,44,44,0.94)), color-stop(53%, rgba(0,0,0,0.94)), color-stop(75%, rgba(17,17,17,0.94)), color-stop(86%, rgba(43,43,43,0.94)));" 
 
  Rem Make Close button larger
  NSB_ProgressClose.style.height="23px"
  NSB_ProgressClose.style.width="23px"
  NSB_ProgressClose.style.fontSize="40px"

End Function
