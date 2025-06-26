
// let celsius = 27;

// let faren = (celsius*1.8) + 32;

// console.log(faren)

/*
let num = 1;

while(num <= 5){
    console.log(num);
    num++;
}
    */
   /*

let str = "";
for(let i=0;i<6;i++){
    for(let j=1;j<6;j++){
        str = `${str}${j} `;
    }
    str = `${str}\n`;
}
console.log(str);

*/

/*
  // setTimeout

  function sayHello(){
    console.log("Hello");
    
  }

  function sayGoodBye(){
    console.log("Good Bye");
  }

//   setTimeout(sayHello(),2000);
//   setTimeout(sayGoodBye(),5000);

setTimeout(function greet(){
    console.log("Hello JS, 2 sec ka delay hai")
},2000);

 let clr = setTimeout(function rokoIsko(){
    console.log("isko run nhi krne dena hai")
},3000);


console.log("Check kro time");
setTimeout(function kamTime(){
    console.log("time delay kam hai iska! 1 sec hai")
},1000);

clearTimeout(clr); // It stops execution of clr

*/

// setInterval

/*

setInterval(function hello(){
    console.log("Hello")
},1000);

clearInterval( setInterval(function bye(){
    console.log("Good Bye")
},1500));

*/


// Higher order functions

/*

function highOrder(name){   
    return function(){
        console.log(`Hello ${name}`)
    }

}

let greet = highOrder("scott");

greet();

function areaOfCircle(radius){
    return function(){
        return 3.14*radius*radius;
    }
}

let area = areaOfCircle(7);
console.log(area());

*/

// IIFE

/*
function printMe(value){
    console.log(`Your value is ${value}`);
}

 printMe((function(n) {return n*n})(10));
 printMe((function(n) {return n*n})(20));

// (function(n) {return n*n})(10)    this is IIFE

*/

// Currying

// O/P:  @scott: Hi at 10:10 PM - from john  -> print this using currying

/*

function curry(receiver){
    let res = `@${receiver}`
    return function curry1(message){
        let res1 = `${res} : ${message}`
        return function curry2(hour,minute,timePeriod){
            let res2 = `${res1} at ${hour}:${minute} ${timePeriod}`
            return function curry3(sender){
                // return `${res2} - from ${sender}`
                console.log(`${res2} - from ${sender}`)

            }
        }
    }
}

// console.log(curry("scott")("Hi")(10,10,"PM")("john"));
curry("scott")("Hi")(10,10,"PM")("john");

*/


/*
Write a JavaScript function to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

*/

/*

function addString(givenString){
    let newString = `py${givenString}`;
    return newString;
}

console.log(addString("JS"));

*/

//     CALL    APPLY    BIND   



// let student1 = {
//     studentName: "Scott",
//     Age: 25,
//     class: "Graduate",
//     section: 'A',
//     rollNumber: 20
// };


// let student2 = {
//     studentName: "John",
//     Age: 25,
//     class: "MBA",
//     section: 'A',
//     rollNumber: 20
// };

// Without call function
/*
function calculateMarks(z){
    console.log(`Hello ${z.studentName},your section is ${z.section}`);
}

calculateMarks(student2);


*/


/*

let student1Marks = totalMarks.bind(student1);

let student2Marks = totalMarks.bind(student2);  // bind doesn't executes the function immediately

// With call function

function calculateMarks(){
    console.log(`Hello ${this.studentName},your section is: ${this.section} and your roll is: ${this.rollNumber}`);
}

calculateMarks.call(student2);


function totalMarks(sub1,sub2,sub3){
    let marks = sub1+sub2+sub3;

    console.log(`Hello ${this.studentName}, your marks is: ${marks}`);

}

totalMarks.call(student1,70,80,90);  // call & apply executes the function immediately
totalMarks.apply(student2,[55,65,75]);

// BIND


    student1Marks(100,100,100);


    student2Marks(90,90,90);


*/

/*
//  Destructuring Object

var person = {
    firstName: "Scott",
    lastName: "John",
    age: 30,
    email: "test@google.com",
    city: "Patna",
    country: "INDIA"
};

//  1st method

// var fn = person.firstName;
// var ln = person.lastName;
// console.log(fn);


//  2nd method

var{firstName:fn, lastName:ln,age,email = "text@yahoo.com", ...other} = person;

console.log(fn);
console.log(ln);
console.log(age);
console.log(email);
console.log(other);

*/

/*
let obj = {
    age:30,
    roll:10,
    sec: "A",
    class: 5
};

var{...other} = obj;
console.log(other);

*/

//  Inheritance ----------------
/*

let user = {
    username :"",
    pasword : "",
    isLoggedIn : "false",
    login : function(){
        if(this.username == "system" && this.pasword == "manager"){
            this.isLoggedIn = true;
            return true;
        }
        else{
            this.isLoggedIn = false;
            return false;
        }
    }

}

let manager = {
    show: function(){
        return `${this.username} Dashboard`;
    },
    dept: function(){
        return `Finance dept.`

    },
    city : "Hyderabad"
};

manager.__proto__ = user;
// console.log(manager.isLoggedIn);

manager.username = "system";
manager.pasword = "manager";

console.log(manager.login());
console.log(manager.show());
console.log(manager.dept());
console.log(manager.city);

*/

//  proto chain  -------------
/*

let person = { personName : "Scott",age : 25}

let student = {roll : 20, marks : 80}

let mbaStudent = {sub : "Finance"}

mbaStudent.__proto__ = student;
student.__proto__ = person;

console.log(mbaStudent,mbaStudent.__proto__);
console.log(student,student.__proto__);
console.log(person,person.__proto__);

console.log(mbaStudent.age);

*/


// Closure --------------
/*

function bankDetails(){
    let currentBalance = 1000;  // can't be accessible outside

    function deposit(amount){     // can't be accessible outside
         currentBalance = currentBalance + amount;
        return `Amount: ${currentBalance}`;
    }
    return deposit;
}

let bal = bankDetails();
console.log(bal(500));
// console.log(currentBalance);   // can't be accessible outside
// console.log(deposit(100));    // can't be accessible outside

*/

// Closure and Encapsulation
/*

function closureAndEncapsulation(){     // returns an object
    let accountBalance = 1000;

    function deposit(amount1){
        accountBalance+=amount1;
        return accountBalance;
    }
    function withDraw(amount2){
        accountBalance-=amount2;
        return accountBalance;
    }
    function getCurrentBalance(){
        return accountBalance;
    }

    return {deposit,withDraw,getCurrentBalance};       //  It's an object 
}

let res = closureAndEncapsulation();
console.log(res.getCurrentBalance());
console.log(res.deposit(500));
console.log(res.withDraw(300));

*/

//  Constructor functions
/*

function createEmployee(empName,empId,salary){
    let emp = {};
    emp.empName = empName;
    emp.empId = empId;
    emp.salary = salary

    emp.getEmpName = function(){
        return this.empName;
    }
    return emp;
}

let emp1 = createEmployee("scott",5,5000);
let emp2 = createEmployee("John",10,500);
console.log(emp1);
console.log(emp1.getEmpName);

*/

// new keyword

/*
function Employee(empName,empId,salary){
    this.empName = empName;
    this.empId = empId;
    this.salary = salary;

    this.getEmpName = function(){
        return this.empName;
    }
}

let emp3 = new Employee("Jack",2,2000);
let emp4 = new Employee("Neil",8,4000);

console.log(emp3);
console.log(emp4);

*/

