var formats, i;

formats = ["DD.MM.YY", "DD.MM.YYYY", "DD/MM/YY", "DD/MM/YYYY", "DD-MM-YY", "DD-MM-YYYY", "DDMMYY", "DDMMYYYY", "YY.MM.DD", "YYYY.MM.DD", "YY/MM/DD", "YYYY/MM/DD", "YY-MM-DD", "YYYY-MM-DD", "YYMMDD", "YYYYMMDD", "MM.DD.YY", "MM.DD.YYYY", "MM/DD/YY", "MM/DD/YYYY", "MM-DD-YY", "MM-DD-YYYY", "MMDDYY", "MMDDYYYY"];

function Main() {
  for (i = (0); i <= UBound(formats) - 1; i++) {
    TextArea1.value = TextArea1.value + formats[i] + " is " + FormatDateTime(DateAdd("s", 0, new Date()), formats[i]) + '\n';
  }
}