// var num = 2;

// function sayMe() {
//     console.log("say me");
// }
// // upto here global context kicks in
// sayMe() // from here executive context kicks in
tipper("80");

function tipper(a) {
    var bill =parseInt(a);
    console.log(bill+5);
}

var bigtipper = function (a) {
    var bill =parseInt(a);
    console.log(bill+15); 
}

bigtipper("200");

console.log(name);
var name = "ramya";

function sayname() {
    var name = "mr.s"
    console.log(name);
}

sayname();
console.log(name);
