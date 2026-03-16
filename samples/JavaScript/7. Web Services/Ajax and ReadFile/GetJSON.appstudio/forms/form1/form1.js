 //GetJSON - gets some data from a site and processes it
 //The data is a .json structure

Button1.onclick = function() {
  GetJSON("datafile.json" , done);
};

function done(data) {
  Textarea1.value = data.name  +  '\n'  +  data.city  +  '\n'  +  data.age;
}
