// var num1 = 7;
// var num2 = 6;

// console.log(num1*num2);

// var answer = num1>num2;

// console.log(answer);

// D = (L-S)/L *100

// (a +  ((b - c) / d)) * e

var sellingprice = 199;
var listingprice = 799;
var discountpercentage = ((listingprice-sellingprice)/listingprice) * 100;

console.log("Discount perentage is : " +discountpercentage);

displaydiscountpercentage = Math.round(discountpercentage);

console.log(displaydiscountpercentage + "% off");


var result = listingprice > sellingprice; 

console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof