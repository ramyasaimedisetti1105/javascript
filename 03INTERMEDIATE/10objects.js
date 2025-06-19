var user = {
    firstName : "ramya",
    lastName :"sai",
    role :"Admin",
    logincount : 32,
    facebooksignin : true,
};
console.log(user.firstName);
console.log(user.lastName);

console.log(user.logincount);
user.logincount = 69;
console.log(user.logincount);
console.table(user);