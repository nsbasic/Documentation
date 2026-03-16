'See https://parall.ax/products/jspdf


Dim pdf = new jsPDF("p", "pt", "letter")

function Button1_onclick()
  Form1.style.display = "none"
  FormattedPage.style.display = "block"
  lblPage.text = "Page 1"
  Container1.innerHTML="one<br>two<br>three"
  Container2.innerHTML="one<br>two<br>three"
  pdf.addHTML(document.body, page2)
End function

Sub page2()
  pdf.addPage()
  lblPage.text = "Page 2"
  pdf.addHTML(document.body, handlePDFdone)
End Sub

Sub handlePDFdone()
  pdf.save()
  FormattedPage.style.display = "none"
  Form1.style.display = "block"
End Sub
