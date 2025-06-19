// User is only to make a purchase when he is :
// Logged in 
// email verified 
// CardInfo - valid
// If any one is missing, stop purchase 

var isLoggedIn = true;
var isemailvarified = false;
var CardInfo = true; 
// if (isLoggedIn){
//     console.log("Logged IN  sucesss");
//     if(isemailvarified){
//         console.log("Email is verified");
//         if (CardInfo) {
//             console.log("you can make a purchase");
            
//         }
//     }  
// }

if (isLoggedIn && isemailvarified && CardInfo) {
    console.log("Allow user to make a purchas");
} else {
    console.log("You are NOT allowed to Purchase");   
}