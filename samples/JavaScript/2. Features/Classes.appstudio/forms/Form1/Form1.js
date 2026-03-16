 //Define a class like this
function Person(name, gender) {
 //Add object properties like this
   this.name = name;
   this.gender = gender;
}

 //Add methods like this.  All Person objects will be able to invoke this
function speakName() {
  NSB.Print((("Howdy, my name is ")  +  (this.name)) + "<br>");
}

Person.prototype.speak = speakName;
 //Instantiate new objects with 'new'
bob = new Person("Bob" , "M");

 //Invoke methods like this
bob.speak(); //Prints "Howdy, my name is Bob"