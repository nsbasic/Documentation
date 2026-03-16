 //This sample uses the Stanford JavaScript Encryption Library
 //See http://bitwiseshiftleft.github.com/sjcl

 //  "SJCL is secure. It uses the industry-standard AES algorithm at 128, 192 or 256 bits; 
 //the SHA256 hash function; the HMAC authentication code; the PBKDF2 password strengthener; 
 //and the CCM and OCB authenticated-encryption modes. Just as importantly, the default 
 //parameters are sensible: SJCL strengthens your passwords by a factor of 1000 and salts 
 //them to protect against rainbow tables, and it authenticates every message it sends to 
 //prevent it from being modified. We believe that SJCL provides the best security which 
 //is practically available in Javascript."

 //This program has just two functions: Encrypt and Decrypt. All they need is a string
 //and a password to operate.

 //This program is also interesting in how it uses a code file for the Crypto Library.
 //The library is pure JavaScript, but can be used from AppStudio transparently.

 //For more information, check out these two blog entries:
 //http://www.appstudio.dev/blog/?p=463
 //http://www.appstudio.dev/blog/?p=451

btnEncrypt.onclick = function() {
  txtEncrypted.value=sjcl.encrypt(txtPassword.value, txtPlain.value);
};

btnDecrypt.onclick = function() {
  txtPlain.value=sjcl.decrypt(txtPassword.value, txtEncrypted.value);
};
