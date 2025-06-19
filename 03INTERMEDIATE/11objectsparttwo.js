var user = {
    firstName : "ramya",
    lastName :"sai",
    role :"Admin",
    logincount : 32,
    facebooksignin : true,
    courselist :[],
    buycourse : function (courseName) {
       this.courselist.push(courseName); 
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courselist.length} courses`;
    },
};
var courselist = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buycourse("react JS course");
user.buycourse("angular course");
console.log(user.getCourseCount());