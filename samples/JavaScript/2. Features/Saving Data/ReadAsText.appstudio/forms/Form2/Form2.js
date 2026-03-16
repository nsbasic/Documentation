var reader;
reader = new FileReader();

txtFilename.onchange = function() {
  reader.readAsText(txtFilename.files[0]);
};

reader.onload = function(e) {
 var lines=createMultiDimArray('');
  txtData.text = "";
  txtData.text = txtData.text  +  "Filename: "  +  txtFilename.files[0].name  +  '\n';
  txtData.text = txtData.text  +  "Size: "  +  txtFilename.files[0].size  +  '\n';
  txtData.text = txtData.text  +  "Modified: "  +  txtFilename.files[0].lastModifiedDate  +  '\n';

  lines = Split(e.target.result, '\n');
  txtData.text = txtData.text  +  "Lines: "  +  Len(lines)  +  '\n';

  for     (i = (0); i  <= 50; i ++) {
    txtData.text = txtData.text  +  lines[i]  +  '\n';
  }

};