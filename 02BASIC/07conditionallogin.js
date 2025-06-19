//  Allow User to acess course if he is :
//  logged in from email
//  logged in from Google
//  logged in from Facebook

var email = true;
var facebook = false;
var google = false;

//  if (email){
//      console.log("LOGIN  sucesss");
//      if(facebook){
//          console.log("LOGIN  sucesss");
//          if (google) {
//              console.log("LOGIN  sucesss");
            
//          }
//      }  
//  }
 if (email || facebook || google) {
    console.log("LOGIN  sucesss");
 }

