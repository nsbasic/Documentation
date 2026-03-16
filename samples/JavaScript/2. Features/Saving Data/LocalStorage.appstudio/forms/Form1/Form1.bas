Rem localStorage Save Example
MsgBox "This program does not do anything visually. Open the Debug Console and have a look at the source code instead."

localStorage.data = "This is Data."
'run And Exit program

Rem localStorage Retrieve Example
console.log(localStorage.data)
 
Rem Some additional samples
value=100
localStorage.setItem("key", value) 'creates localStorage.key with defined value
localStorage["key"] = value 'alternative method for above
localStorage.getItem("key") 'calls localStorage.key...useful to check if it exists 
localStorage.removeItem("key") 'deletes localStorage.key
delete localStorage.key 'alternative method for above
delete localStorage["key"] 'another alternative method for above
'localStorage.clear() 'nuclear deletion of all localStorage variables in the domain. Use with care.

Rem Test if Private Browsing is turned on (iOS)
Try
  localStorage.private = "test"
Catch err
   MsgBox "Please turn Private Browsing off" 
End Try
