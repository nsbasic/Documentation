 //See https://parall.ax/products/jspdf


var pdf = new jsPDF("p","pt","letter");

Button1.onclick = function() {
  nsbDOMAttr(Form1,'style.display', "none");
  nsbDOMAttr(FormattedPage,'style.display', "block");
  lblPage.text = "Page 1";
  Container1.innerHTML="one<br>two<br>three";
  Container2.innerHTML="one<br>two<br>three";
  pdf.addHTML(document.body, page2);
};

function page2() {
  pdf.addPage();
  lblPage.text = "Page 2";
  pdf.addHTML(document.body, handlePDFdone);
}

function handlePDFdone() {
  pdf.save();
  nsbDOMAttr(FormattedPage,'style.display', "none");
  nsbDOMAttr(Form1,'style.display', "block");
}
