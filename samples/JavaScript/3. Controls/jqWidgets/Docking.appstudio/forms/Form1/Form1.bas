Function Button2_onclick() 
  Window1.show(Content1)
  Window2.show(Content2)
  $("#Docking1").jqxDocking("addWindow", "Window1")
  $("#Docking1").jqxDocking("addWindow", "Window2","",1, 0)
End Function