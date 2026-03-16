
Function frmHtmlView_onshow()
  HTMLview1.innerHTML="<iframe frameborder='0' allowfullscreen " _
    & "src='http://www.youtube.com/embed/eDF7QRC3c3Y?feature=player_detailpage'>" _
    & "</iframe>'"
  HTMLview1.refresh()
End Function
