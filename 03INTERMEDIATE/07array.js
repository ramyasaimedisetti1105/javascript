// var name;
// var name1;
// var name2;
var countries = ["India","USA","Japan","Russia"];

var states = new Array("Andrapradesh","Assam","Delhi","Mumbai")

// console.log(states[1]);

// console.log(states.length);
states[0] = "punjab"; // replaces the first element in array
// console.log(states);

var user = ["ramya","ramya@mail.com",3, 34, true];
// console.log(user);

user.pop(); 
user.pop();  //  removes the last elements of array
// console.log(user);
user.unshift("newvalue");
// console.log(user);
user.shift();
console.log(user);

// console.log(user.indexOf(3));  
// console.log(user.indexOf("ramya"));
console.log(user.indexOf("newyy"));

console.log(Array.from("ramya"));
