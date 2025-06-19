// Create an application with following roles:
// admin - gets full acess 
// subadmin - gets acess to create/delete courses
// testprep - gets acess to create/delete tests 
// user - gets acess to consume content 

var user = "testprep";

switch (user) {
    case "admin":
        console.log("you get full acess");
        break;
     case "subadmin":
        console.log("gets acess to create/delete courses");
        break;
    case "testprep":
        console.log("gets acess to create/delete tests");
        break;
    case "user":
        console.log("gets acess to consume content");
        break;
    

    default:
        console.log("Trail user");
        break;
}