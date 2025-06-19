/*
Define a function that can answer the role of a user .
A user can be on following roles:
admin - with all access 
subadmin - with acess to create/delete courses
testprep - with acess to create/delete test
user - trail user.

input : getuserRole(name,role)
*/
 var getuserRole = function (name,role) {
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
    
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`
            break; 

        case "testprep":
            return `${name} is testprep with access to create and delete tests`
            break;
            
        case "user":
            return `${name} is a user  to consume content`
            break;
        
    
        default:
            return `${name} is a trailuser`
            break;
    }
}

console.log( getuserRole("ramya","testprep"));
var getRole = getuserRole("sai","user");
console.log(getRole);
